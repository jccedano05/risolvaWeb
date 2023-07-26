import { useState } from "react";

import "./App.css";
import { Navbar } from "./reutilizable/navbar/Navbar";
import { Footer } from "./reutilizable/footer/Footer";
export interface IUser {
  id: number;
  name: string;
  permissions: string[];
  roles: string[];
}
function App() {
  const [user, setuser] = useState<IUser | null>(null);

  const login = () => {
    //request done
    setuser({
      id: 1,
      name: "Jhon",
      permissions: ["analize"],
      roles: ["admin"],
    });
  };

  const logout = () => {
    setuser(null);
  };

  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
