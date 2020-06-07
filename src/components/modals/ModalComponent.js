import React from "react";
import { Modal, ModalTitle, ModalBody, Button, ModalFooter } from 'react-bootstrap';

const ModalComponent = ({ show, headerText, children, close, submit, submitText }) => {

  const submitButton = () => (submitText && submit) ?
    <Button variant='primary' onClick={submit}>
      {submitText}
    </Button> : null;

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <ModalTitle>{headerText}</ModalTitle>
      </Modal.Header>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button variant='secondary' onClick={close}>
          {'close'}
        </Button>
        {submitButton()}
      </ModalFooter>
    </Modal>
  )
};

export default ModalComponent;
