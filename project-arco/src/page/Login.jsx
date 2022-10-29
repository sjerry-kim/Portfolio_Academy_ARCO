import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <body>
      <div className="login-background">
        <Form style={{width:"300px", paddingTop: "19%"}}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label style={{color:"#000051"}}>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ID" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label style={{color:"#000051"}}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className='m-3' type="submit"
                  style={{width:"100px",backgroundColor:"#000051", border:"none"}} 
                  onClick={()=>{}}>
            Sign In
          </Button>
        </Form>
      </div>
    </body>
  );
}

export default Login;