import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;