

import {Grid, Typography, Button, AppBar} from '@mui/material'
import Image from 'mui-image';


import { Link, To, useLocation } from 'react-router-dom';
import { ColorsApp } from '../../utils/colors';


import risolvaLogoBlackAndWhite from "../../assets/images/Risolva blanco y negro.jpeg";


interface IMenu {
    name: string
    path: To;
}

const menu: IMenu[] = [
    {name: 'Inicio', path: '/'},
    {name: 'Nosotros', path: '/nosotros'},
    {name: 'Servicios', path: '/servicios'},
    {name: 'Productos', path: '/productos'},
    {name: 'Contacto', path: '/contacto'},
]



export const MenuOptions = () => {

  const { pathname  } = useLocation();




    return (
        <AppBar position='sticky'>
          <Grid container justifyContent="space-around" alignItems={"center"} py={1} px={2} bgcolor={ColorsApp.main}>
          <Grid item xs={2}>
            <Image fit="contain" src={risolvaLogoBlackAndWhite} width={"60%"} />
          </Grid>
          <Grid item xs={6}>
            <Grid container justifyContent={"space-evenly"}>
            {
              menu && menu.map((section, indexSectionMenu) =>  (
                <Button variant="outlined" sx={{borderWidth:"3px",borderBottomColor: pathname === section.path ? "white" : "transparent"}} key={`indexSectionMenu ${indexSectionMenu}`}>
                <Typography variant="subtitle1" color={"white"}>
                  <Link 
                  to={section.path }
                    style={{ color: "white", textDecoration: "none" }}
                    color="secondary">
                    {section.name}
                  </Link>
                </Typography>
              </Button>
              ))
            }
            </Grid>
          </Grid>
        </Grid>
        </AppBar>
      );
}
