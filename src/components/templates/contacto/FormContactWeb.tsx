import { Button, FormControl, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { ColorsApp } from "../../../utils/colors";
import { useUtils } from "../../../hooks/useUtils";
import validator from "validator";

interface IFormContactUs {
  title: string;
  inputPlaceHolder: string;
  multiline?: number;
}

const formContactUs: IFormContactUs[] = [
  {
    title: "Nombre",
    inputPlaceHolder: "Escribe tu nombre completo",
  },
  {
    title: "Correo",
    inputPlaceHolder: "ejemplo@correo.com",
  },
  { title: "Telefono", inputPlaceHolder: "+52 4439822201" },
  {
    title: "Mensaje",
    inputPlaceHolder: "Escribe tu mensaje aqui",
    multiline: 3,
  },
];

const initialInputsState = {
  nombre: "",
  correo: "",
  telefono: "",
  mensaje: "",
};

export const FormContactWeb = () => {
  const { isMobileDevice } = useUtils();

  const [inputs, setInputs] = useState(initialInputsState);

  const handleChangesInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    //send form

    // return response

    // message to success
  };
  return (
    <Grid
      bgcolor="Background"
      container
      height="100%"
      justifyContent="center"
      mx={isMobileDevice ? 0 : 5}
      py={3}
      sx={{ color: ColorsApp.darkMain }}
      px={isMobileDevice ? 1 : 3}
    >
      <Grid item md={8} xs={10}>
        <Typography variant="h3" fontWeight={600}>
          Contactanos
        </Typography>
      </Grid>

      <Grid mt={5} item md={8} xs={10}>
        {formContactUs.map((section) => (
          <Grid
            container
            direction="column"
            alignItems="start"
            mb={4}
            key={`form input contact ${section.title} - ${section.inputPlaceHolder}`}
          >
            <FormControl fullWidth>
              <Typography variant="h6" fontWeight={600}>
                {section.title}
              </Typography>
              <Input
                fullWidth
                multiline
                id={section.title.toLowerCase()}
                name={section.title.toLowerCase()}
                rows={section.multiline ? section.multiline : 1}
                placeholder={section.inputPlaceHolder}
                onChange={handleChangesInputs}
              />
            </FormControl>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center">
        <Grid item md={2} sm={6} xs={10}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: ColorsApp.darkMain,
              color: ColorsApp.backgroundColorLight,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
