import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
// import Button from "@mui/material/Button";

const ModalDelete = ({
  modalEliminar,
  abrirCerrarModalEliminar,
  deleteEmployee,
}) => {
  return (
    <Modal show={modalEliminar} onHide={abrirCerrarModalEliminar}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="alert alert-danger">
            Are you sure you want to delete this?
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={abrirCerrarModalEliminar}>
          Cancel
        </Button>
        <Button variant="danger" onClick={deleteEmployee}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;
