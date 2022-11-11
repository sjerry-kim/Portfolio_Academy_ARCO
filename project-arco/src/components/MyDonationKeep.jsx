import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import PaymentTable from "./PaymentTable";
import AccountUpdateModal from "./AccountUpdateModal";
import StopDonate from "./StopDonate";
import PaymentInfo from "./PaymentInfo";

const MyDonationKeep = () => {
  const [login, setLogin] = useState(false);
  const data = useContext(DataContext);

  return (
    <div className="my-dona-keep">
      <h1>You Donate totals <span>0$</span>!</h1>
      <PaymentTable />
      <div className="account-box">
        <PaymentInfo />
        <br />
        <AccountUpdateModal />
      </div>
      <StopDonate />
    </div>
  );
}

export default MyDonationKeep;