import React from "react";
import { Table } from "reactstrap";
import { Form } from "react-bootstrap";
import { Row, Col, CardTitle, CardBody, Input, Card } from "reactstrap";

const TablePedalEventsVehicles = ({ current }) => {
  return (
    <Form.Group as={Row} className="mb-5">
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
      <Table bordered hover>
        <tbody>
          <tr>
            <td>ABS activado a más de 30kmh</td>
            <td>{current.abs30kmh}</td>
          </tr>
          <tr>
            <td>Aceleración Inmediata al encender el motor</td>
            <td>{current.accelWithIgnon}</td>
          </tr>
          <tr>
            <td>Freno presionado más de 10 seg en Movimiento</td>
            <td>{current.brake10sec}</td>
          </tr>
          <tr>
            <td>Asistencia de freno en RPMs equivocadas </td>
            <td>{current.brkAssistWrongrpms}</td>
          </tr>
          <tr>
            <td>Embrague presionado mas de 20seg en movimiento</td>
            <td>{current.clutch20sSpd30}</td>
          </tr>
          <tr>
            <td>Embrague presionado más de 30 segundos en detención</td>
            <td>{current.clutch30sSpd0}</td>
          </tr>
          <tr>
            <td>Embrague por 10 segundos, no freno y vel menor a 2km/h</td>
            <td>{current.clutchNobrIgnon}</td>
          </tr>
          <tr>
            <td>Sobrecarga del Embrague</td>
            <td>{current.clutchOvrld}</td>
          </tr>
          <tr>
            <td>Total eventos de Pedal</td>
            <td>{current.pedalEventsTotal}</td>
          </tr>
        </tbody>
      </Table>
    </Form.Group>
  );
};

export default TablePedalEventsVehicles;
