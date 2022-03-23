import React from "react";
import { Form } from "react-bootstrap";

const DatepickerComponent = () => {
  return (
    <div className="col-md-4">
      <Form.Group controlId="doj">
        <Form.Label>Fecha Incial</Form.Label>
        <Form.Control type="date-local" name="doj" placeholder="Date of Joining" />
      </Form.Group>
    </div>
  );
};

export default DatepickerComponent;
