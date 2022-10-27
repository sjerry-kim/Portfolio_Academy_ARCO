import { NavLink, Outlet, Link } from "react-router-dom";
import About from "../page/About";
import Donation from "../page/Donation";
import Home from "../page/Home";
import SafeCenter from "../page/SafeCenter";
import Login from "../page/Login";

const Navbar = () => {
  const activeStyle = {color: "#e64a19"}

  return (
    <div className="glb-header" >
      <div className="glb-title">
        <Link to='/' element={<Home />}
        style={{ textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold' , color: '#000051'}}>
          ARCO
        </Link>
      </div>
      <nav className="glb-nav">
        <NavLink to='/about' element={<About />}
        style={{ textDecoration: 'none' , fontWeight: 'bold', paddingLeft: '5%' , paddingRight: '5%', color: '#000051'}} 
        >About Us</NavLink>
        <NavLink to='/donation' element={<Donation />}
        style={{ textDecoration: 'none' , fontWeight: 'bold' , paddingLeft: '5%', paddingRight: '5%', color: '#000051' }}
        >Donation</NavLink>
        <NavLink to='/safecenter' element={<SafeCenter />}
        style={{ textDecoration: 'none' , fontWeight: 'bold' , paddingLeft: '5%', paddingRight: '5%', color: '#000051' }}
        >Safe Center</NavLink>
      </nav>
      <div className="glb-login">
        <NavLink to='/login' element={<Login />}
        style={{ textDecoration: 'none' , fontWeight: 'bold', color: '#000051'}}>Sign In</NavLink>
      </div>
    </div>
  );
}

export default Navbar;