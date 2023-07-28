import { useEffect } from "react";

import "./App.css";
import { Navbar } from "./reutilizable/navbar/Navbar";
import { Footer } from "./reutilizable/footer/Footer";
import { useMediaQuery, useTheme } from "@mui/material";
import { useUtils } from "./hooks/useUtils";
export interface IUser {
  id: number;
  name: string;
  permissions: string[];
  roles: string[];
}
function App() {
  const { setIsMobile } = useUtils();

  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setIsMobile(isMobileDevice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileDevice]);

  // const [user, setuser] = useState<IUser | null>(null);

  // const login = () => {
  //   //request done
  //   setuser({
  //     id: 1,
  //     name: "Jhon",
  //     permissions: ["analize"],
  //     roles: ["admin"],
  //   });
  // };

  // const logout = () => {
  //   setuser(null);
  // };

  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
