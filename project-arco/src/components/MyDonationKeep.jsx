import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import PaymentTable from "./PaymentTable";
import AccountUpdateModal from "./AccountUpdateModal";
import StopDonate from "./StopDonate";

const MyDonationKeep = () => {
  const [login, setLogin] = useState(false);
  const data = useContext(DataContext);

  return (
    <div>
      <h1>You Donate totals <span>0$</span>!</h1>
      <PaymentTable />
      <div className="account-box">
        <h3>Payment Information</h3>
        <label style={{ marginTop: "10px"}}>Bank</label>
        <br />
        <input type="text" 
        value={data.state.user.userBank? (data.state.user.userBank) :("Korea Bank")} disabled 
        style={{width: "200px", padding:"5px", marginTop: "2px", borderRadius: "10px", border: "none"}}/>
        <br />
        <label style={{ marginTop: "10px"}}>Account</label>
        <br />
        <input type="text"  
        value={data.state.user.userAccount? (data.state.user.userAccount) :("123-4567-8910")} disabled 
        style={{width: "200px", padding:"5px", marginTop: "2px", borderRadius: "10px", border: "none"}}/>
        <br />
        <AccountUpdateModal />
      </div>
      <StopDonate />
    </div>
  );
}

export default MyDonationKeep;