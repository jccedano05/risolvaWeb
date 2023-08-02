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

import risolvaLogoOriginal from "../../assets/images/risolva logos/RISOLVA AUTOMATIZACIONES - sin fondo.png";
import { useUtils } from "../../hooks/useUtils";
import { ColorsApp } from "../../utils/colors";

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
    <AppBar position="sticky" sx={{ bgcolor: "transparent" }}>
      <Toolbar>
        <Grid
          container
          justifyContent={isMobileDevice ? "normal" : "space-around"}
          alignItems={"center"}
          px={1}
          py={1}
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
          <Grid item md={3} lg={2} xs={4}>
            <Grid container justifyContent="center" height={"100%"}>
              <Image
                fit="contain"
                src={risolvaLogoOriginal}
                width={isMobileDevice ? "100%" : "70%"}
              />
            </Grid>
          </Grid>
          {isShowingContent && (
            <Grid item xl={8} lg={10} xs={12}>
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
                        borderTopColor: "transparent",
                        borderLeftColor: "transparent",
                        borderRightColor: "transparent",
                        borderBottomColor:
                          pathname === section.path
                            ? ColorsApp.secondary
                            : "transparent",
                      }}
                      onClick={handleOpenMenu}
                      key={`indexSectionMenu ${indexSectionMenu}`}
                    >
                      <Typography variant="h5" color={"white"} fontWeight={600}>
                        <Link
                          to={section.path}
                          style={{
                            color: ColorsApp.main,
                            textDecoration: "none",
                          }}
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
