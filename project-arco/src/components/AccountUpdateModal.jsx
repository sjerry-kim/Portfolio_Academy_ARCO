import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DataContext from '../context/DataContext';

function AccountUpdateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {action, state} = useContext(DataContext);
  const [bank, setBank] = useState("")
  const [account, setAccount] = useState("")

  const updatePayInfo = () => {
    action.setUser({
      ...state.user,
      userBank: bank,
      userAccount: account
    })
    handleClose();
  }

  return (
    <div className='account-modal'>
      <Button className='account-btn' variant="primary" onClick={handleShow}>
        Change Payment Information
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Bank</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex) OO Bank"
                onChange={(e)=>{setBank(e.target.value)}}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Account</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex) 123-4567-8910"
                onChange={(e)=>{setAccount(e.target.value)}}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updatePayInfo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AccountUpdateModal;