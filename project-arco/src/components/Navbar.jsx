import { NavLink, Outlet } from "react-router-dom";
import About from "../page/About";
import Donation from "../page/Donation";
import Home from "../page/Home";
import SafeCenter from "../page/SafeCenter";
import Login from "../page/Login";

const Navbar = () => {
  const activeStyle = {color: "orange"}

  return (
    <div className="glb-header" >
      <div className="glb-title">
        <NavLink to='/' element={<Home />}
        style={ ({isActive})=> isActive ? activeStyle : undefined } 
        end>
          ARCO
        </NavLink>
      </div>
      <nav className="glb-nav">
        <NavLink to='/about' element={<About />}>About Us</NavLink>
        <NavLink to='/donation' element={<Donation />}>Donation</NavLink>
        <NavLink to='/safecenter' element={<SafeCenter />}>Safe Center</NavLink>
      </nav>
      <div className="glb-login">
        <NavLink to='/login' element={<Login />}>Sign In</NavLink>
      </div>
    </div>
  );
}

export default Navbar;