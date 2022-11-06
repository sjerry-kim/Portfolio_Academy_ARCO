import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

function SubmitAdoptionApp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      alert("We will contact you after checking the submitted form. It will takes 2-3 days.");
    }
    setValidated(true);
  };

  return (
    <Form style={{display: "flex", flexDirection: "column", alignItems: "center"}} 
      noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3" style={{width: "200px"}}>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3" style={{width: "200px"}}>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3" style={{width: "200px"}}>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Birth date</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3" style={{width: "300px"}} >
          <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3" style={{width: "300px"}}>
          <Form.Group as={Col} controlId="validationCustom04">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="tel" placeholder="000-0000-0000" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
        </Row>
        {/* 여기서부터!!!!!!! */}
        <Row className="m-3 mb-4" style={{width: "500px"}}>
          <Form.Group as={Col} controlId="validationCustom05">
              <Form.Label>Check the day (Duplicate selection available)</Form.Label>
              <InputGroup style={{diplay:"flex", flexDirection: "row", justifyContent: "center"}}>
                <Form.Check style={{width:"80px", display:"inline-block", marginRight: "20px"}} id={`sunday`} label={`Sunday`}/>
                <Form.Check style={{width:"80px", display:"inline-block", marginRight: "20px"}} id={`monday`} label={`Monday`}/>
                <Form.Check style={{width:"80px", display:"inline-block", marginRight: "20px"}} id={`tuesday`} label={`Tuesday`}/>
                <Form.Check style={{width:"80px", display:"inline-block", marginRight: "20px"}} id={`wednesday`} label={`Wednesday`}/>
                <Form.Check style={{width:"80px", display:"inline-block", marginRight: "20px"}} id={`thursday`} label={`Thursday`}/>
                <Form.Check style={{width:"80px", display:"inline-block", marginRight: "20px"}} id={`friday`} label={`Friday`}/>
                <Form.Check style={{width:"80px", display:"inline-block", marginRight: "20px"}} id={`saturday`} label={`Saturday`}/>
              </InputGroup>
            </Form.Group>
        </Row>
        <Row className="m-3 mb-4" style={{width: "500px"}}>
          <Form.Group as={Col} controlId="validationCustom05">
              <Form.Label>Check the day (Duplicate selection available)</Form.Label>
              <InputGroup style={{diplay:"flex", flexDirection: "row", justifyContent: "center"}}>
                <Form.Check style={{width:"80px", display:"inline-block", marginRight: "80px"}} id={`Morning`} label={`Morning `}/>
                <Form.Check style={{width:"80px", display:"inline-block", marginRight: "0px"}} id={`Afternoon`} label={`Afternoon`}/>
              </InputGroup>
            </Form.Group>
        </Row>


      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default SubmitAdoptionApp;