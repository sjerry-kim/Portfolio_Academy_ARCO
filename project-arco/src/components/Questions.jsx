import { useContext } from "react";
import DataContext from "../context/DataContext";
import QuestionTextarea from "./QuestionTextarea";

const Questions = () => {
  const {state} = useContext(DataContext);

  return ( 
    <div className="question-div">
      <div className="question-area">
        <div className="qna-box">
          <div className="counselor-box">
            <div className="counselor-profile">A</div>
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