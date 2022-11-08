import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate();

  const [correct,setCorrect] = useState("");

  const checkQuiz = ()=>{

    switch(correct){
      case "100,000" :
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
        <h1>Quiz</h1>
        <h3>how many animals are abondoned in a year?</h3>
        <div className="quiz-radio-box">
            <Form.Check type="radio" 
                        name="quiz" label={`10,000`} onClick={()=>{setCorrect("wrong")}}/>
            <Form.Check type="radio" 
                        name="quiz" label={`50,000`} onClick={()=>{setCorrect("wrong")}}/>
            <Form.Check type="radio" 
                        name="quiz" label={`100,000`} onClick={()=>{setCorrect("100,000")}}/>
        </div>
        <button onClick={()=>{checkQuiz()}}>Check</button>
      </section>
    </div>
  );
}

export default Quiz;