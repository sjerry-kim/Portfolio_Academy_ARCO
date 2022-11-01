import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import MyDonationKeep from "./MyDonationKeep";
import MyDonationPause from "./MyDonationPause";

const MyDonation = () => {
    const [login, setLogin] = useState(false);
    const data = useContext(DataContext);
  
    useEffect(()=>{
      setLogin(data.state.user? true :false)
    },[data.state.user])

  return ( 
    <div>
      {
        data.state.user.userDonation? (
          <MyDonationKeep />
        ):(
          <MyDonationPause />
        )
      }
    </div>
  );
}

export default MyDonation;