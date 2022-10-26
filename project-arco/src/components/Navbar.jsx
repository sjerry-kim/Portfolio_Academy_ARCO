import { NavLink } from "react-router-dom";
import About from "../page/About";
import Donation from "../page/Donation";
import SafeCenter from "../page/SafeCenter";

const Navbar = () => {
  return (
    <div>
      <NavLink to='/about' element={<About />}>About Us</NavLink>
      <NavLink to='/donation' element={<Donation />}>Donation</NavLink>
      <NavLink to='/safecenter' element={<SafeCenter />}>Safe Center</NavLink>
    </div>
  );
}

export default Navbar;