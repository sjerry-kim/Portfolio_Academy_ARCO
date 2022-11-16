import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import ProfileUpdateModal from "./ProfileUpdateModal";

const MyProfile = () => {
  const [login, setLogin] = useState(false);
  const data = useContext(DataContext);

  useEffect(()=>{
    setLogin(data.state.user? true :false)
  },[data.state.user])

  return ( 
    <div className="my-profile">
      <div className="profile-greet">
        <h1>Welcome {data.state.user.userId}!</h1>
        <h2>Thank you for being with us.</h2>
      </div>
      <section className="profile-section">
        <div className="profile-box">
          {
            data.state.user.userProfile? (
              <div style={{
                            width:"150px", 
                            height:"150px",
                            backgroundImage:`url(${data.state.user.userProfile})`, 
                            backgroundSize: "cover",
                            borderRadius:"50%"}}>
              </div>) : (
              <div style={{
                            width:"150px", 
                            height:"150px",
                            backgroundImage:`url(${require('../img/default_profile.jpeg')})`,
                            backgroundSize: "cover",
                            borderRadius:"50%",
              }}></div>)
          }
          <ProfileUpdateModal />
        </div>
        <div className="profileInfo-box">
          <label style={{marginRight:"90%", marginTop: "10px"}}>ID</label>
          <br />
          <input type="text" value={data.state.user.userId} disabled style={{color:"gray", width: "200px", padding:"5px", marginTop: "2px", borderRadius: "5px", border: "none"}}/>
          <br />
          <label style={{marginRight:"90%", marginTop: "10px"}}>Password</label>
          <br />
          <input type="password" value={data.state.user.userPassword} disabled style={{color:"gray", width: "200px", padding:"5px", marginTop: "2px",  borderRadius: "5px", border: "none"}}/>
        </div>
      </section>
    </div>
  );
}

export default MyProfile;