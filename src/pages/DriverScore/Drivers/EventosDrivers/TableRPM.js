import React from "react";
import { Table } from "reactstrap";
import { Form } from "react-bootstrap";
import { Row, Col, CardTitle, CardBody, Input, Card } from "reactstrap";

const TableRPM = ({ current }) => {
  return (
    <Form.Group as={Row} className="mt-10  mr-1 ml-1">
      <Col sm="5">
        <Form.Label
          className="font-light"
          style={{
            fontSize: "15px",
            marginRight: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Detalle de Eventos de RPMs
        </Form.Label>
      </Col>
      <Table bordered hover style={{ width: "70%" }}>
        <tbody>
          <tr>
            <td style={{ width: "90%" }}>RPM Alto y Carga Superior al 15%</td>
            <td style={{ width: "10%" }}>{current.orpm1700EngLoad15}</td>
          </tr>
          <tr>
            <td>Sobreconsumo (Consumo 30%+ combustible en 30seg)</td>
            <td>{current.overConsume}</td>
          </tr>
          <tr>
            <td>Exceso RPMs en Ralenti</td>
            <td>{current.overRpmIdle}</td>
          </tr>
          <tr>
            <td>Exceso RPMs en Movimiento</td>
            <td>{current.overRpmMov}</td>
          </tr>
          <tr>
            <td>Exceso de RPM y bajo torque</td>
            <td>{current.overRpmLowTorque}</td>
          </tr>
          <tr>
            <td>Total Eventos RPM</td>
            <td>{current.rpmEventsTotal}</td>
          </tr>
        </tbody>
      </Table>
    </Form.Group>
  );
};

export default TableRPM;
