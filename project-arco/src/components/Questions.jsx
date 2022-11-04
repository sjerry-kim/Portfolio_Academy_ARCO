import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import QuestionTextarea from "./QuestionTextarea";

const Questions = () => {
  const {state, action} = useContext(DataContext);
  const [questions, setQuestions] = useState()

  return ( 
    <div style={{width:"100%", height:"100%"}}>
      <div style={{width:"100%", height:"100%"}}>
        <div className="QnA-box" style={{width: "100%", height:"85%", overflowY:"scroll"}}>
          <div className="counselor-box">
            <div className="counselor-profile">C</div>
            <div className="counselor-p">
              <p>Please wait 2-3 days for the answers :)</p>
            </div>
          </div>
          {
            state.user.userQuestions.map((q,index)=>(
              <div key={index} className="user-box">
                <div className="user-p">
                  <p>{q.text}</p>
                </div>
              </div>
            ))
          }
        </div>
        <QuestionTextarea />
      </div>
    </div>
  );
}

export default Questions;