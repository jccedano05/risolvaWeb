import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import { ColorsApp } from "../../utils/colors";

import Image from "mui-image";


import instagramLogo from "../../assets/logos/Instagram Logo.svg";
import twitterLogo from "../../assets/logos/Twitter Logo.png";
import linkedInLogo from "../../assets/logos/LinkedIn Logo.png";

export const Footer = () => {
  return (
    <Grid
      container
      justifyContent="space-around"
    //   alignItems={"baseline"}
      alignItems={"center"}
      height={"30vh"}
      pt={1}
      px={2}
      bgcolor={ColorsApp.main}
    >
        <Grid item md={3} xs={12}>
            <Grid container direction="column" >
                <Typography  variant="h4" fontWeight={600} mb={1} textAlign="initial" color="white">Quienes somos?</Typography>
                <Typography variant="subtitle2" textAlign="initial" color="white">Somos una empresa mexicana dedicada a la venta de instrumentación y servicios de ingeniería para toda la industria.</Typography>
            </Grid>
        </Grid>
        <Grid item md={3} xs={12}>
                <Typography   variant="h4" fontWeight={600} mb={1} textAlign="initial" color="white">Contacto</Typography>     
                <Typography mb={0.5} variant="subtitle2" textAlign="initial" color="white"><u>Domicilio:</u> Av. Elementia 125 int 53. col. Element, San Agustin, Jalisco, México.</Typography>
                <Typography mb={0.5} variant="subtitle2" textAlign="initial" color="white"><u>Telefono:</u> +52 (33)31 500963</Typography>
                <Typography variant="subtitle2" textAlign="initial" color="white"><u>Correo:</u> contacto@risolva.com.mx</Typography>
           
        
        </Grid>
        <Grid item md={2} xs={12}>
                <Typography   variant="h4" fontWeight={600} mb={1} textAlign="center" color="white">Siguenos</Typography>  
                <Grid container justifyContent="center" alignItems="center" mt={2} >
                    
                   <Button variant="outlined" sx={{width:"10%", p:0}}>
                    <Image src={linkedInLogo} width={"60%"} />
                   </Button>
                   
                   <Button variant="outlined"  sx={{ width:"10%", p:0}}>
                    <Image src={instagramLogo} width={"60%"} />
                   </Button>
                   
                   <Button variant="outlined" sx={{ width:"10%", p:0}}>
                    <Image src={twitterLogo} width={"60%"} />
                   </Button>
                </Grid>
        </Grid>
    </Grid>
  );
};
