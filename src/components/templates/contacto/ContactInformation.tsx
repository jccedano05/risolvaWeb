import { Grid, Typography } from "@mui/material";
import React from "react";
import { ColorsApp } from "../../../utils/colors";
import { useUtils } from "../../../hooks/useUtils";
import { MapGoogleContact } from "../../organims/contacto/MapGoogleContact";
import automatizationContactImage from "../../../assets/images/automatizacion contacto.jpg";
import { SocialMediaICompanyIcons } from "../../../reutilizable/general/SocialMediaICompanyIcons";

export const ContactInformation = () => {
  const { isMobileDevice } = useUtils();
  return (
    <Grid container minHeight="100%" width="100%" py={3}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        height={"100%"}
        mt={5}
        mx={3}
      >
        <Grid item md={6} sm={6} xs={12}>
          <img
            width={"100%"}
            src={automatizationContactImage}
            alt="Imagen de contacto"
          />
        </Grid>
        <Grid item pr={2} pl={4} md={6} sm={6} xs={12}>
          <Grid container>
            <Typography
              color={ColorsApp.darkSecondary}
              textAlign="justify"
              variant="h6"
            >
              Contacta con nosotros para pedir un presupuesto o información
              detallada Conoce de forma rápida y directa por cuánto puedes
              automatizar tu empresa.
            </Typography>
            <Grid
              my={5}
              container
              direction="column"
              justifyContent="start"
              alignItems="start"
            >
              <SocialMediaICompanyIcons />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        bgcolor="Background"
        container
        justifyContent="start"
        direction="row"
        height={isMobileDevice ? "100%" : "80%"}
        color={ColorsApp.backgroundColorLight}
        sx={{ textAlign: isMobileDevice ? "center" : "start" }}
      >
        <Grid item md={3} xs={12} px={2} bgcolor={ColorsApp.main}>
          <Grid container my={2} direction="column">
            <Typography variant="h5" fontWeight={600}>
              Telefono
            </Typography>
            <Typography variant="subtitle1">+52 (33)31 500963</Typography>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12} px={2} bgcolor={ColorsApp.darkMain}>
          <Grid container direction="column" my={2}>
            <Typography variant="h5" fontWeight={600}>
              Correo
            </Typography>
            <Typography variant="subtitle1">contacto@risolva.com.mx</Typography>
          </Grid>
        </Grid>
        <Grid item md={5} xs={12} px={2} bgcolor={ColorsApp.main}>
          <Grid container direction="column" my={2}>
            <Typography variant="h5" fontWeight={600}>
              Domicilio
            </Typography>
            <Typography variant="subtitle1">
              Av. Elementia 125 int 53. col. Element, San Agustin, Jalisco,
              México.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
