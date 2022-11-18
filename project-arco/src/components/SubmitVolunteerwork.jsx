import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

function SubmitVolunteerwork() {
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
    <Form className='vol-app-form' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3" >
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control className='first-name-input' required type="text" placeholder="First name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row className="mb-3" >
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control className='last-name-input' required type="text" placeholder="Last name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Birth date</Form.Label>
          <Form.Control className='birth-input' required type="date" placeholder="Last name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>

        <Row className="mb-3" >
          <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control className='email-input' type="email" placeholder="name@example.com" required/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="mb-3" >
          <Form.Group as={Col} controlId="validationCustom04">
              <Form.Label>Phone number</Form.Label>
              <Form.Control className='phone-input' type="tel" placeholder="000-0000-0000" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
        </Row>

        {/* 여기서부터!!!!!!! */}
        <Row className="m-3" >
          <Form.Group as={Col} controlId="validationCustom05">
              <Form.Label>Check the day (Duplicate selection available)</Form.Label>
              <InputGroup className='input-day' style={{diplay:"flex", flexDirection: "row", justifyContent: "center"}}>
                <Form.Check id={`sunday`} label={`Sunday`}/>
                <Form.Check id={`monday`} label={`Monday`}/>
                <Form.Check id={`tuesday`} label={`Tuesday`}/>
                <Form.Check id={`wednesday`} label={`Wednesday`}/>
                <Form.Check id={`thursday`} label={`Thursday`}/>
                <Form.Check id={`friday`} label={`Friday`}/>
                <Form.Check id={`saturday`} label={`Saturday`}/>
              </InputGroup>
            </Form.Group>
        </Row>

        <Row className="m-3 mb-4" >
          <Form.Group as={Col} controlId="validationCustom05">
              <Form.Label>Check the day (Duplicate selection available)</Form.Label>
              <InputGroup className='input-time'>
                <Form.Check id={`morning`} label={`Morning `}/>
                <Form.Check id={`afternoon`} label={`Afternoon`}/>
              </InputGroup>
            </Form.Group>
        </Row>


      <Form.Group className="mb-3">
        <Form.Check className='agree-check'
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <button className='vol-app-btn' type="submit">Submit form</button>
    </Form>
  );
}

export default SubmitVolunteerwork;