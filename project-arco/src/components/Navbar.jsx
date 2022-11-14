import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import About from "../page/About";
import Donation from "../page/Donation";
import Home from "../page/Home";
import SafeCenter from "../page/SafeCenter";
import Login from "../page/Login";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const data = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(()=>{
    setLogin(data.state.user? true :false)
  },[data.state.user])

  const checkLogin = () =>{
    data.state.user? (
      navigate('/mypage')
    ):(
      navigate('/login')
    )
    login(true);
  }

  const checkLogout = ()=>{
    setLogin(false);
    data.action.setUser(null); // 🤬🤬🤬
    navigate('/'); // 🤬🤬🤬
  }

  return (
    <div className="glb-header" >
      <div className="glb-title">
        <Link to='/' element={<Home />}  onClick="window.scrollTo(0,0);">
          <FontAwesomeIcon icon={faShieldDog}/>
          ARCO
        </Link>
      </div>
      <nav className="glb-nav">
        <Link to='/about' onClick={()=>{
          //navigate('/about')
          window.scrollTo(0,0);}}>About Us</Link>
        <Link to='/donation' onClick={()=>{
          //navigate('/donation')
          window.scrollTo(0,0);}}>Donation</Link>
        <Link to='/safecenter' onClick={()=>{
          //navigate('/safecenter')
          window.scrollTo(0,0);}}>Safe Center</Link>
      </nav>
      <div className="glb-login">
          {
            login? (
              <div>
                <button onClick={()=>{navigate('/mypage')}}>
                  My Page
                </button>
                <button
                  style={{ textDecoration: 'none', color: '#2C3D4F'}}
                  onClick={checkLogout}>
                  Sign Out
                </button>
              </div>
            ):(
              <button
          style={{ textDecoration: 'none', color: '#2C3D4F'}}
          onClick={checkLogin}>
            My Page
          </button>
            )
          }
      </div>
    </div>
  );
}

export default Navbar;