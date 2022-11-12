import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SubmitDontion() {
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
        <Row className="mb-3" style={{width: "170px"}}>
          <Form.Group as={Col} controlId="validationCustom05">
              <Form.Label>Contribution</Form.Label>
              <Form.Control type="number" defaultValue="5000" min="5000" step="5000" required />
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
      <button className='sub-dona-btn' type="submit">Submit form</button>
    </Form>
  );
}

export default SubmitDontion;