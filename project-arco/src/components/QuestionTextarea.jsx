import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

function QuestionTextarea() {
  const [questions, setQuestions] = useState("");
  const {state, action} = useContext(DataContext);

  const sendQuestions = () =>{
    const newQuestions = {text: questions};
    const addedQuestions = state.user.userQuestions.userQuestions[0].concat(newQuestions);
    action.setUser.userQuestions = addedQuestions;
  }

  return (
    <Form
      style={{width: "100%", height: "15%", display: "flex",  position:"fixed", bottom:"0"}}>
      <Form.Group controlId="exampleForm.ControlTextarea1" style={{width: "70%", height:"100%"}}>
        <Form.Control as="textarea"
          onChange={(e)=>{setQuestions(e.target.value)}}
          placeholder='Send your qusestions.' 
          rows={3} style={{height:"100%"}}/>
      </Form.Group>
      <Button variant="secondary" onClick={sendQuestions}
        style={{ width: "10%", height:"15%", position:"fixed", bottom:"0", right:"9px"}}>
        Send
      </Button>
    </Form>
  );
}

export default QuestionTextarea;