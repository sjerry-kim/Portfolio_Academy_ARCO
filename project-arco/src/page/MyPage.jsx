import { Link, NavLink, Outlet } from "react-router-dom";
import MyDonation from "../components/MyDonation";
import MyProfile from "../components/MyProfile";
import Questions from "../components/Questions";
import Home from "./Home";

const MyPage = () => {
  return (
    <div>
      <div className="mypage-background">
        <div style={{width:"100px", height:"10px", position:"fixed",
                      top: "5px", right:"10px", zIndex: "600"}}>
          <Link to='/' element={<Home/>} style={{textDecoration:"none", color: "#000051"}}> 
            ARCO Home
          </Link>
        </div>
        <div className="mypage-box">
          <nav className="mypage-nav">
            <NavLink index to='/mypage' element={<MyProfile />}>My profile</NavLink>
            <NavLink to='/mypage/mydonation' element={<MyDonation />}>My Donation</NavLink>
            <NavLink to='/mypage/questions' element={<Questions />}>Questions</NavLink>
          </nav>
          <div style={{width:"80%", position:"absolute", right:"0", height:"100%", backgroundColor:"#b7c5b6"}}> 
            <section style={{width:"90%", height:"90%", position:"fixed", top:"15%", 
                              backgroundColor:"lightgray"}}>
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;