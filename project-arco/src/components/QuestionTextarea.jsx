import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

function QuestionTextarea() {
  const [questions, setQuestions] = useState("");
  const {state, action} = useContext(DataContext);

  const sendQuestions = (e) =>{
    e.preventDefault();
    const newQuestions = {text: questions};
    const addedQuestions = state.user.userQuestions.concat(newQuestions);
    if(questions){
      action.setUser({
        ...state.user, // 💙💛 나눠쓸 때는 user를 추가해서 넣어줘야함 💙💛
        userQuestions: addedQuestions
      })
    }
    document.querySelector(".question-text").value = ""
  }

  return (
    <div style={{width:"100%", height:"15%", position:"absolute", bottom:"0px",}}>
      <Form onSubmit={sendQuestions}
        style={{ height:"100%", display: "flex",  flexDirection: "row", justifyContent: "space-between"}}>
        <Form.Group controlId="exampleForm.ControlTextarea1" style={{width:"80%"}}>
          <Form.Control as="textarea" className='question-text'
            onChange={(e)=>{setQuestions(e.target.value)}}
            placeholder='Send your qusestions.' 
            rows={3} style={{height:"100%"}}/>
        </Form.Group>
        <Button variant="secondary" type="submit" style={{width:"20%"}}>
          Send
        </Button>
      </Form>
    </div>
    
  );
}

export default QuestionTextarea;