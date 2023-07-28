import {
  Grid,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import Image from "mui-image";

import { useState, useEffect } from "react";

import { Link, To, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import risolvaLogoBlackAndWhite from "../../assets/images/Risolva blanco y negro.jpeg";
import { useUtils } from "../../hooks/useUtils";

interface IMenu {
  name: string;
  path: To;
}

const menu: IMenu[] = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Productos", path: "/productos" },
  { name: "Contacto", path: "/contacto" },
];

export const MenuOptionsComputer = () => {
  const { isMobileDevice } = useUtils();
  const { pathname } = useLocation();

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isShowingContent, setIsShowingContent] = useState(false);

  useEffect(() => {
    if (!isMobileDevice || (isMobileDevice && isOpenMenu)) {
      setIsShowingContent(true);
    } else {
      setIsShowingContent(false);
    }
  }, [isOpenMenu, isMobileDevice]);

  const handleOpenMenu = () => {
    if (isMobileDevice) {
      setIsOpenMenu(!isOpenMenu);
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid
          container
          justifyContent={isMobileDevice ? "normal" : "space-around"}
          alignItems={"center"}
          py={1}
          px={2}
        >
          {isMobileDevice && (
            <Grid item xs={4}>
              <Grid container alignItems="center" justifyContent="start">
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleOpenMenu}
                >
                  <MenuIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Grid>
            </Grid>
          )}
          <Grid item md={2.5} lg={2} sm={2} xs={4}>
            <Grid container justifyContent="center" height={"100%"}>
              <Image
                fit="contain"
                src={risolvaLogoBlackAndWhite}
                width={isMobileDevice ? "100%" : "60%"}
              />
            </Grid>
          </Grid>
          {isShowingContent && (
            <Grid item xl={6} lg={8} md={9} xs={12}>
              <Grid
                container
                justifyContent={"space-evenly"}
                direction={isMobileDevice ? "column" : "row"}
              >
                {menu &&
                  menu.map((section, indexSectionMenu) => (
                    <Button
                      variant="outlined"
                      sx={{
                        borderWidth: "3px",
                        borderBottomColor:
                          pathname === section.path ? "white" : "transparent",
                      }}
                      onClick={handleOpenMenu}
                      key={`indexSectionMenu ${indexSectionMenu}`}
                    >
                      <Typography variant="subtitle1" color={"white"}>
                        <Link
                          to={section.path}
                          style={{ color: "white", textDecoration: "none" }}
                          color="secondary"
                        >
                          {section.name}
                        </Link>
                      </Typography>
                    </Button>
                  ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
