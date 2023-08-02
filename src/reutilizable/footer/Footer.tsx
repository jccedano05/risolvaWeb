import { Grid, Typography, Button, AppBar, Toolbar } from "@mui/material";
import React from "react";
import { ColorsApp } from "../../utils/colors";

import Image from "mui-image";

import risolvaLogoWhite from "../../assets/images/risolva logos/RISOLVA AUTOMATIZACIONES Blanco.png";

import { SocialMediaICompanyIcons } from "../general/SocialMediaICompanyIcons";

export const Footer = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: ColorsApp.darkSecondary }}>
      <Toolbar>
        <Grid
          container
          justifyContent="space-around"
          //   alignItems={"baseline"}
          alignItems={"center"}
          minHeight={"25vh"}
          pt={1}
          pb={2}
        >
          <Grid item lg={3} md={3} xs={12}>
            <Grid container direction="column">
              <Image src={risolvaLogoWhite} width={"80%"} />

              <Typography
                mt={2}
                variant="subtitle2"
                textAlign="initial"
                color="white"
              >
                Somos una empresa mexicana dedicada a la venta de
                instrumentación y servicios de ingeniería para toda la
                industria.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Typography
              variant="h4"
              fontWeight={600}
              mb={1}
              textAlign="initial"
              color="white"
            >
              Contacto
            </Typography>
            <Typography
              mb={0.5}
              variant="subtitle2"
              textAlign="initial"
              color="white"
            >
              <u>Domicilio:</u> Av. Elementia 125 int 53. col. Element, San
              Agustin, Jalisco, México.
            </Typography>
            <Typography
              mb={0.5}
              variant="subtitle2"
              textAlign="initial"
              color="white"
            >
              <u>Telefono:</u> +52 (33)31 500963
            </Typography>
            <Typography variant="subtitle2" textAlign="initial" color="white">
              <u>Correo:</u> contacto@risolva.com.mx
            </Typography>
          </Grid>
          <Grid item lg={2} md={3} xs={12}>
            <Typography
              variant="h4"
              fontWeight={600}
              mb={1}
              textAlign="center"
              color="white"
            >
              Siguenos
            </Typography>
            <SocialMediaICompanyIcons />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
