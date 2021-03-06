import React from "react";
import { Table } from "reactstrap";
import {
  FaGripLines,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { Form } from "react-bootstrap";
import { Row, Col, CardTitle, CardBody, Input, Card } from "reactstrap";
import combustible from "../../../../components/imagesEngine/combustible.png";
import detenidoEngine from "../../../../components/imagesEngine/detenidoEngine.png";
import distanciaEngine from "../../../../components/imagesEngine/distanciaEngine.png";
import eficienciaKm from "../../../../components/imagesEngine/eficienciaKm.png";
import eficienciaLi from "../../../../components/imagesEngine/eficienciaLi.png";
import eventosembrage from "../../../../components/imagesEngine/eventosembrage.png";
import eventosEngine from "../../../../components/imagesEngine/eventosEngine.png";
import tiempoEngine from "../../../../components/imagesEngine/tiempoEngine.png";
import "../image.css";
const TableEngineVehicles = ({ current, previous }) => {
  // console.log(current);
  const convert = (str) => {
    //console.log(str);
    var time = new Date();
    time.setHours(str.split(":")[0], str.split(":")[1], str.split(":")[2]);
    //console.log(time);
    return time;
  };

  return (
    <Form.Group as={Row} className="mb-5 mr-1 ml-1">
      <Col sm="3">
        <Form.Label
          className="font-light"
          style={{
            fontSize: "15px",
            marginRight: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Eventos de Motor
        </Form.Label>
      </Col>
      <Table bordered hover>
        <thead>
          <tr
            className="text-center th-sm"
            style={{
              background: "#2196F3",
              color: "white",
              textAlign: "center",
            }}
          >
            <th className="text-center">Periodo</th>
            <th
              className="text-center th-sm"
              style={{
                background: "#2196F3",
                color: "white",
                alignSelf: "center",
              }}
            >
              <div className="image-container">
                <img
                  className="parent"
                  src={distanciaEngine}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
                <br />
              </div>
              <p>Distancia Recorrida Km</p>
            </th>
            <th className="text-center">
              <div className="image-container">
                <img
                  className="parent"
                  src={tiempoEngine}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
                <br />
              </div>
              <p>Tiempo de Motor Encendido hh:mm:ss</p>
            </th>
            <th className="text-center">
              <div className="image-container">
                <img
                  className="parent"
                  src={detenidoEngine}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
                <br />
              </div>
              <p>Detenido y Motor Encendido en Planta hh:mm:ss</p>
            </th>
            <th className="text-center">
              <div className="image-container">
                <img
                  className="parent"
                  src={combustible}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
                <br />
              </div>
              <p>Combustible Consumido litros</p>
            </th>
            <th className="text-center">
              <div className="image-container">
                <img
                  className="parent"
                  src={eficienciaLi}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
                <br />
              </div>
              <p>Eficiencia li/h</p>
            </th>
            <th className="text-center">
              <div className="image-container">
                <img
                  className="parent"
                  src={eficienciaKm}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
                <br />
              </div>
              <p>Eficiencia Km/l</p>
            </th>
            <th className="text-center">
              <div className="image-container">
                <img
                  className="parent"
                  src={eventosEngine}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
                <br />
              </div>
              <p>Eventos de Motor</p>
            </th>
            <th className="text-center">
              <div className="image-container">
                <img
                  className="parent"
                  src={eventosembrage}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
                <br />
              </div>
              <p>Eventos por Embrague, Freno o Acelerador</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td>Actual</td>
            <td>{current.distanceKm}</td>
            <td>{current.ignTime}</td>
            <td>{current.idleTime}</td>
            <td>{current.fuelConsumedLi}</td>
            <td>{current.efficiencyLih}</td>
            <td>{`${current.efficiencyKml}`}</td>
            <td>{0}</td>
            <td>{0}</td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>Anterior</td>
            <td>{previous.distanceKm}</td>
            <td>{previous.ignTime}</td>
            <td>{previous.idleTime}</td>
            <td>{previous.fuelConsumedLi}</td>
            <td>{previous.efficiencyLih}</td>
            <td>{`${previous.efficiencyKml}`}</td>
            <td>{0}</td>
            <td>{0}</td>
          </tr>
          <tr>
            <td>Desempe??o</td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {parseInt(current.distanceKm) ===
                parseInt(previous.distanceKm) ? (
                  <FaGripLines
                    size={25}
                    style={{ textAlign: "center", color: "skyblue" }}
                  />
                ) : parseInt(current.distanceKm) >
                  parseInt(previous.distanceKm) ? (
                  <FaArrowAltCircleUp
                    size={25}
                    style={{ textAlign: "center", color: "green" }}
                  />
                ) : (
                  <FaArrowAltCircleDown
                    size={25}
                    style={{ textAlign: "center", color: "red" }}
                  />
                )}
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                {convert(current.ignTime) === convert(previous.ignTime) ? (
                  <FaGripLines
                    size={25}
                    style={{ textAlign: "center", color: "skyblue" }}
                  />
                ) : convert(current.ignTime) > convert(previous.ignTime) ? (
                  <FaArrowAltCircleUp
                    size={25}
                    style={{ textAlign: "center", color: "green" }}
                  />
                ) : (
                  <FaArrowAltCircleDown
                    size={25}
                    style={{ textAlign: "center", color: "red" }}
                  />
                )}
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {convert(current.idleTime) === convert(previous.idleTime) ? (
                  <FaGripLines
                    size={25}
                    style={{ textAlign: "center", color: "skyblue" }}
                  />
                ) : convert(current.idleTime) > convert(previous.idleTime) ? (
                  <FaArrowAltCircleUp
                    size={25}
                    style={{ textAlign: "center", color: "green" }}
                  />
                ) : (
                  <FaArrowAltCircleDown
                    size={25}
                    style={{ textAlign: "center", color: "red" }}
                  />
                )}
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                {parseInt(current.fuelConsumedLi) ==
                parseInt(previous.fuelConsumedLi) ? (
                  <FaGripLines
                    size={25}
                    style={{ textAlign: "center", color: "skyblue" }}
                  />
                ) : parseInt(current.fuelConsumedLi) >
                  parseInt(previous.fuelConsumedLi) ? (
                  <FaArrowAltCircleUp
                    size={25}
                    style={{ textAlign: "center", color: "green" }}
                  />
                ) : (
                  <FaArrowAltCircleDown
                    size={25}
                    style={{ textAlign: "center", color: "red" }}
                  />
                )}
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {parseInt(current.efficiencyLih) ==
                parseInt(previous.efficiencyLih) ? (
                  <FaGripLines
                    size={25}
                    style={{ textAlign: "center", color: "skyblue" }}
                  />
                ) : parseInt(current.efficiencyLih) >
                  parseInt(previous.efficiencyLih) ? (
                  <FaArrowAltCircleUp
                    size={25}
                    style={{ textAlign: "center", color: "green" }}
                  />
                ) : (
                  <FaArrowAltCircleDown
                    size={25}
                    style={{ textAlign: "center", color: "red" }}
                  />
                )}
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {parseInt(current.efficiencyKml) ==
                parseInt(previous.efficiencyKml) ? (
                  <FaGripLines
                    size={25}
                    style={{ textAlign: "center", color: "skyblue" }}
                  />
                ) : parseInt(current.efficiencyKml) >
                  parseInt(previous.efficiencyKml) ? (
                  <FaArrowAltCircleUp
                    size={25}
                    style={{ textAlign: "center", color: "green" }}
                  />
                ) : (
                  <FaArrowAltCircleDown
                    size={25}
                    style={{ textAlign: "center", color: "red" }}
                  />
                )}
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {parseInt(current.distanceKm) ===
                parseInt(previous.distanceKm) ? (
                  <FaGripLines
                    size={25}
                    style={{ textAlign: "center", color: "skyblue" }}
                  />
                ) : parseInt(current.distanceKm) >
                  parseInt(previous.distanceKm) ? (
                  <FaArrowAltCircleUp
                    size={25}
                    style={{ textAlign: "center", color: "green" }}
                  />
                ) : (
                  <FaArrowAltCircleDown
                    size={25}
                    style={{ textAlign: "center", color: "red" }}
                  />
                )}
              </div>
            </td>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {parseInt(current.distanceKm) ===
                parseInt(previous.distanceKm) ? (
                  <FaGripLines
                    size={25}
                    style={{ textAlign: "center", color: "skyblue" }}
                  />
                ) : parseInt(current.distanceKm) >
                  parseInt(previous.distanceKm) ? (
                  <FaArrowAltCircleUp
                    size={25}
                    style={{ textAlign: "center", color: "green" }}
                  />
                ) : (
                  <FaArrowAltCircleDown
                    size={25}
                    style={{ textAlign: "center", color: "red" }}
                  />
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Form.Group>
  );
};

export default TableEngineVehicles;
