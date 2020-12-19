import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = ({ text, show, setShow, success }) => {
  return (
    <Modal animation={true} show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{success ? "Basarili!" : "Uyarı"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Kapat
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalComponent;
