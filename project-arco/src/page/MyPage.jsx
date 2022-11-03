import { Link, NavLink, Outlet } from "react-router-dom";
import MyDonation from "../components/MyDonation";
import MyProfile from "../components/MyProfile";
import Questions from "../components/Questions";
import Home from "./Home";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const MyPage = () => {
  const [login, setLogin] = useState(true);
  const data = useContext(DataContext);

  useEffect(()=>{
    setLogin(data.state.user? true :false)
  },[data.state.user])

  return (
    <div>
      <div className="mypage-background">
        <Link to='/' element={<Home/>} 
              style={{height:"10px", width:"100px", margin:"0", textDecoration:"none", 
              color: "#000051", backgroundColor: "transparent", 
              position: "fixed", top: "10px", right: "10px"}}> 
          ARCO Home
        </Link>
        <nav className="mypage-nav">
          <NavLink index to='/mypage' element={<MyProfile />}>My profile</NavLink>
          <NavLink to='/mypage/mydonation' element={<MyDonation />}>My Donation</NavLink>
          <NavLink to='/mypage/questions' element={<Questions />}>Questions</NavLink>
        </nav>
        <section style={{width:"80%", height:"85%", position:"fixed", bottom:"0", right:"0",
                          backgroundColor:"lightgray", display:"flex", flexDirection:"row",
                          justifyContent:"space-between", padding:"0"}}>
          <Outlet />
        </section> 
      </div>
    </div>
  );
}

export default MyPage;