import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
// import Button from "@mui/material/Button";

const ModalUpdate = ({
  modalEditar,
  abrirCerrarModalEditar,
  UpdateEmployee,
  onInputChange,
  country,
}) => {
  return (
    <Modal
      show={modalEditar}
      onHide={abrirCerrarModalEditar}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Country</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={onInputChange}
              value={country && country.name}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              name="code"
              id="code"
              placeholder="code"
              onChange={onInputChange}
              value={country && country.code}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={abrirCerrarModalEditar}>
          Close
        </Button>
        <Button variant="primary" onClick={UpdateEmployee}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalUpdate;
