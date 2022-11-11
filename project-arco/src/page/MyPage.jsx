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
        <Link to='/' className="mypage-home-a" element={<Home/>}> 
          ARCO Home
        </Link>
        <h1 className="mypage-title">My Page</h1>
        <nav className="mypage-nav">
          <NavLink index to='/mypage' element={<MyProfile />}>My profile</NavLink>
          <NavLink to='/mypage/mydonation' element={<MyDonation />}>My Donation</NavLink>
          <NavLink to='/mypage/questions' element={<Questions />}>Questions</NavLink>
        </nav>
        <section className="mypage-section">
          <Outlet />
        </section> 
      </div>
    </div>
  );
}

export default MyPage;