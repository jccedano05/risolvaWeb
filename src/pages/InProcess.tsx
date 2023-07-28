import { Typography, Grid } from "@mui/material";
import risolva from "../assets/images/risolva.svg";
export const InProcess = () => {
  return (
    <Grid container>
      <Typography variant="h4" mb={2} textAlign="center">
        {" "}
        Pagina en construccion
      </Typography>
      <img src={risolva} alt="logo" />
    </Grid>
  );
};
