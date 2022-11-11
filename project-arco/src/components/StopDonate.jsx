import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DataContext from '../context/DataContext';

function StopDonate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {state,action} = useContext(DataContext);
  const pauseDonate = () => {
    action.setUser({
      ...state.user,
      userDonation: false
    })
    alert("confirmed")
    handleClose();
  }

  return (
    <div className='stop-dona'>
      <Button className='stop-dona-btn' onClick={handleShow}>
        Stop Donating
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Stop Donating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={pauseDonate}>
            Stop Donating
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default StopDonate;