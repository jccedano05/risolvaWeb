import React from "react";
import { Grid } from "@mui/material";
import { ContactInformation } from "../components/templates/contacto/ContactInformation";
import { FormContactWeb } from "../components/templates/contacto/FormContactWeb";

export const Contacto = () => {
  return (
    <Grid container bgcolor="Background">
      <Grid item lg={7} xs={12}>
        <ContactInformation />
      </Grid>
      <Grid item lg={5} xs={12}>
        <FormContactWeb />
      </Grid>
    </Grid>
  );
};
