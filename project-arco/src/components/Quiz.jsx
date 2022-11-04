import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();

  const [correct,setCorrect] = useState("");

  const checkQuiz = ()=>{

    switch(correct){
      case "50,000" :
        alert("Correct!")
        break;
      case "wrong" :
        return alert("Wrong!")
      default: 
        return alert("Select the answer!")
    }
    navigate('/about/publishing_newsletter')
  }

  return (
    <div>
      <section className="quiz-box">
        <h1 style={{textAlign:"start", marginBottom:"25px"}}>Quiz</h1>
        <h3 style={{marginBottom:"30px"}}>how many animals are abondoned in a year?</h3>
        <div className="quiz-radio-box">
          <InputGroup style={{diplay:"flex", flexDirection: "row", justifyContent: "center"}}>
            <Form.Check type="radio" style={{width:"80px", display:"inline-block", marginRight: "40px"}} 
                        name="quiz" label={`10,000`} onClick={()=>{setCorrect("wrong")}}/>
            <Form.Check type="radio" style={{width:"80px", display:"inline-block", marginRight: "40px"}} 
                        name="quiz" label={`50,000`} onClick={()=>{setCorrect("50,000")}}/>
            <Form.Check type="radio"  style={{width:"80px", display:"inline-block", marginRight: "40px"}} 
                        name="quiz" label={`100,000`} onClick={()=>{setCorrect("wrong")}}/>
          </InputGroup>
        </div>
        <button onClick={()=>{checkQuiz()}}>Check</button>
      </section>
    </div>
  );
}

export default Quiz;