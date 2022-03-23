import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const AddForm = () => {
  const [country, setCountry] = useState({ name: "", code: "" });
  const handleSubmit = (e) => {
    e.preventdefault();
  };

  const onInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCountry({ ...country, [name]: value });
    console.log(country);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={onInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          name="code"
          id="code"
          placeholder="code"
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
