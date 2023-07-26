import { Grid } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Inicio } from "../../pages/Inicio";
import { Nosotros } from "../../pages/Nosotros";
import { Servicios } from "../../pages/Servicios";
import { Productos } from "../../pages/Productos";
import { Contacto } from "../../pages/Contacto";

import { MenuOptions } from "./MenuOptions";
import { ColorsApp } from "../../utils/colors";

export const Navbar = () => {
  return (
    <Grid container justifyContent={"space-between"}>
      <BrowserRouter>
        <MenuOptions />
        <Grid
          container
          justifyContent="center"
          px={2}
          py={2}
          bgcolor={ColorsApp.backgroundColorLight}
          minHeight="60vh"
        >
          <Routes>
            <Route index element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </Grid>
  );
};

//Example

// export const Navbar = () => {
//   return (
//     <Grid container justifyContent={"space-between"}>
//       <Grid item xs={1}>
//         <Image fit="contain" src={risolvaLogo} width={"100%"} />
//       </Grid>
//       <Grid item xs={8}>
//         <Grid container justifyContent={"space-between"}>

//         <BrowserRouter>
//         <Navigation />
//         {user ? (
//           <button onClick={logout}>Logout</button>
//         ) : (
//           <button onClick={login}>Login</button>
//         )}
//         <Routes>
//           <Route index element={<LandingPage />} />
//           <Route path="/landing" element={<LandingPage />} />
//           <Route element={<ProtectedRoute isAuthenticated={!!user} />}>
//             <Route path="/home" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Route>
//           <Route
//             path="/analitycs"
//             element={
//               <ProtectedRoute
//                 isAuthenticated={!!user && user.permissions.includes("analize")}
//                 redirectTo="/home"
//               >
//                 <Analitycs />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute
//                 isAuthenticated={!!user && user.roles.includes("admin")}
//                 redirectTo="/home"
//               >
//                 <Admin />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };
