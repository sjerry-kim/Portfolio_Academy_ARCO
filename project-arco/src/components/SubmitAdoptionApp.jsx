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
        <Form.Group as={Col}>
          <Form.Label>Sort</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">Adoption</option>
            <option value="2">Fostering</option>
            <option value="3">Sponsoring</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
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