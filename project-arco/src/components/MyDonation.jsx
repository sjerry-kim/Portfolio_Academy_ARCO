import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";

const MyDonation = () => {
    const [login, setLogin] = useState(false);
    const data = useContext(DataContext);
  
    useEffect(()=>{
      setLogin(data.state.user? true :false)
    },[data.state.user])

  return ( 
    <div>
      <h1>You Donate totals <span>0$</span>!</h1>
      <div className="account-box">
          <label style={{ marginTop: "10px"}}>Bank</label>
          <br />
          <input type="text" style={{width: "200px", borderRadius: "10px", border: "none"}}/>
          <br />
          <label style={{ marginTop: "10px"}}>Account</label>
          <br />
          <input type="password" style={{width: "200px", borderRadius: "10px", border: "none"}}/>
        </div>
    </div>
  );
}

export default MyDonation;