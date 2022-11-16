import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const {action} = useContext(DataContext);
  const navigate = useNavigate();

  const loginUser = () => {
    action.setUser({
      userId: id,
      userPassword: pw,
      userProfile: "",
      userDonation: true,
      userBank: "",
      userAccount:"",
      userQuestions:[],
      userTransfer:[
        { date: "2022.08.03",
          name: "J****",
          amount: 10000},
        { date: "2022.09.02",
          name: "J****",
          amount: 10000},
        { date: "2022.10.03",
          name: "J****",
          amount: 10000},
      ]
    });
    navigate('/mypage/myprofile');
  }

  return (
    <body>
      <div className="login-background">
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" onChange={(e)=>{setId(e.target.value)}} required/>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPw(e.target.value)}} required/>
          </Form.Group>
          <Button className='m-3' type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    </body>
  );
}

export default Login;