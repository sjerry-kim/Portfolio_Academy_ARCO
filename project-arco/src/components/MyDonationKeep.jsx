import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import PaymentTable from "./PaymentTable";
import AccountUpdateModal from "./AccountUpdateModal";
import StopDonate from "./StopDonate";
import PaymentInfo from "./PaymentInfo";
import { useCallback } from "react";

const MyDonationKeep = () => {
  const [login, setLogin] = useState(false);
  const {state} = useContext(DataContext);

  const transfer = state.user.userTransfer;

  const totalF = transfer[0].amount + transfer[1].amount + transfer[2].amount;

  /*
  const result = 0;

  const total = () => {
    for(let i=0; i<=2; i++){
      result += transfer[i].amount;
    }
    return result;
  }
  */

  return (
    <div className="my-dona-keep">
      <h1>You Donate totals 
        <span> {totalF}$
        </span>!
      </h1>
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