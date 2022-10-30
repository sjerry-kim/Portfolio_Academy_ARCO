import { NavLink, Outlet, Link } from "react-router-dom";
import About from "../page/About";
import Donation from "../page/Donation";
import Home from "../page/Home";
import SafeCenter from "../page/SafeCenter";
import Login from "../page/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const activeStyle = {color: "#e64a19"}

  return (
    <div className="glb-header" >
      <div className="glb-title">
        <Link to='/' element={<Home />}
        style={{ textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold' , color: '#2C3D4F'}}>
          <FontAwesomeIcon icon={faShieldDog} style={{color: "#2C3D4F", marginRight:"7px" }}/>
          ARCO
        </Link>
      </div>
      <nav className="glb-nav">
        <NavLink to='/about' element={<About />}
        style={{ textDecoration: 'none' , fontWeight: 'bold', paddingLeft: '5%' , paddingRight: '5%', color: '#2C3D4F'}} 
        >About Us</NavLink>
        <NavLink to='/donation' element={<Donation />}
        style={{ textDecoration: 'none' , fontWeight: 'bold' , paddingLeft: '5%', paddingRight: '5%', color: '#2C3D4F' }}
        >Donation</NavLink>
        <NavLink to='/safecenter' element={<SafeCenter />}
        style={{ textDecoration: 'none' , fontWeight: 'bold' , paddingLeft: '5%', paddingRight: '5%', color: '#2C3D4F' }}
        >Safe Center</NavLink>
      </nav>
      <div className="glb-login">
        <Link to='/login' element={<Login />}
        style={{ textDecoration: 'none', color: '#2C3D4F', fontSize:"0.8em"}}>My Page</Link>
      </div>
    </div>
  );
}

export default Navbar;