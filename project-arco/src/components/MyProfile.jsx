import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const MyProfile = () => {
  const [login, setLogin] = useState(false);
  const data = useContext(DataContext);

  useEffect(()=>{
    setLogin(data.state.user? true :false)
  },[data.state.user])

  return ( 
    <div>
      <div className="profile-greet">
        <h1>Welcome {data.state.user.userId}!</h1>
        <h2>Thank you for being with us.</h2>
      </div>
      <section className="profile-section">
        <div className="profile-box">
          <div className="progile-img" style={{width:"100%", height:"100%",backgroundColor:"pink", borderRadius:"50%"}}>
            <img src="" alt="" />
          </div>
          <button>Change the profile</button>
        </div>
        <div className="profileInfo-box">
          <label style={{marginRight:"90%", marginTop: "10px"}}>ID</label>
          <br />
          <input type="text" value={data.state.user.userId} disabled style={{width: "200px", borderRadius: "10px", border: "none"}}/>
          <br />
          <label style={{marginRight:"90%", marginTop: "10px"}}>PassWord</label>
          <br />
          <input type="password" value={data.state.user.userPassword} disabled style={{width: "200px", borderRadius: "10px", border: "none"}}/>
        </div>
      </section>
      
    </div>
  );
}

export default MyProfile;