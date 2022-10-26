import { Outlet, Link } from "react-router-dom";
import LoginIconComp from "../components/LoginIconComp";
import Navbar from "../components/Navbar";
import Home from "./Home";

const Layout = () => {
  return (
    <div>
      <header className="glb-header">
        <Link index element={<Home />}>ARCO</Link>
        <Navbar />
        <LoginIconComp />
        <Outlet />
      </header>
    </div>
  );
}

export default Layout;