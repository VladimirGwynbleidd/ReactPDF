import React from "react";
import { Table } from "reactstrap";
import {
  FaGripLines,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  BsFillArrowUpCircleFill,
} from "react-icons/fa";
import { AlignCenter } from "react-bootstrap-icons";
import SpeedIcon from "@mui/icons-material/Speed";
import { Form } from "react-bootstrap";
import { Row, Col, CardTitle, CardBody, Input, Card } from "reactstrap";
import cemex from "../../../../components/imagesSecurity/cemex.png";
import activetrac from "../../../../components/imagesSecurity/activetrac.png";
import avgspd from "../../../../components/imagesSecurity/avgspd.png";
import aceleraciones from "../../../../components/imagesSecurity/aceleraciones.png";
import curvas from "../../../../components/imagesSecurity/curvas.png";
import descenso from "../../../../components/imagesSecurity/descenso.png";
import distanciaexceso from "../../../../components/imagesSecurity/distanciaexceso.png";
import frenadas from "../../../../components/imagesSecurity/frenadas.png";
import reposo from "../../../../components/imagesSecurity/reposo.png";
import tiempoexceso from "../../../../components/imagesSecurity/tiempoexceso.png";
import "../image.css";
const TableSecurityVehicles = ({
  current,
  previous,
  vehicleInformation,
  timeLapsInformation,
}) => {
  console.log(vehicleInformation.drivers.length);
  const convert = (str) => {
    // console.log(str);
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    // var yourdate = str.split("/").reverse().join("-");
    // return yourdate;
    return [date.getFullYear(), mnth, day].join("-");
  };

  const convertTime = (str) => {
    //console.log(str);
    var time = new Date();
    time.setHours(str.split(":")[0], str.split(":")[1], str.split(":")[2]);
    //console.log(time);
    return time;
  };

  const TableDrivers = () => {
    return vehicleInformation.drivers.map((item) => {
      return(
      <tr>
        <td className="text-center">{item.assetName}</td>
      </tr>);
    });
  };

  const TableDriversNoData = () => {
    return (
      <tr>
        <td className="text-center">No hay datos</td>
      </tr>
    );
  };
  return (
    <>
      <Form.Group as={Row} sm="12" className="mt-10">
        <Col sm="5">
          <Form.Label
            className="font-light"
            style={{
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            <img
              src={activetrac}
              style={{
                height: 110,
                width: 210,
              }}
            />
            Conductor: {vehicleInformation.vehicleName}
            <br />
            Cemex ID: {vehicleInformation.vehicleId}
            <br />
          </Form.Label>
        </Col>
        <Col sm="5" style={{ textAlign: "right" }}>
          <Form.Label
            className="font-light"
            style={{
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            <div className="row">
              <div className="col">
                <img
                  className="rounded float-right"
                  src={cemex}
                  style={{
                    height: 110,
                    width: 210,
                  }}
                />
              </div>
            </div>
            Vehículos Manejados en el periodo: <br />
            Desde: &nbsp;{convert(timeLapsInformation.from)} &nbsp; &nbsp;
            Hasta: &nbsp;
            {convert(timeLapsInformation.to)}
            <br />
            <br />
            <div>
              <Table hover>
                <thead>
                  <tr
                    className="text-center"
                    style={{
                      background: "#2196F3",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <th className="text-center">
                      <p>Conductores Asociados</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleInformation.drivers.length === 0 ? (
                    <TableDriversNoData />
                  ) : (
                    <TableDrivers />
                  )}
                </tbody>
              </Table>
            </div>
          </Form.Label>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-5 mt-20  mr-1 ml-1">
        <Col sm="3">
          <Form.Label
            className="font-light"
            style={{
              fontSize: "15px",
              marginRight: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Eventos de Seguridad
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
              <th className="text-center">
                <div className="image-container">
                  <img
                    className="parent"
                    src={avgspd}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                  <br />
                </div>
                <p>Velodicad promedio Km/h</p>
              </th>
              <th className="text-center">
                <div className="image-container">
                  <img
                    className="parent"
                    src={aceleraciones}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                  <br />
                </div>
                <p>Accceleraciones Agresivas</p>
              </th>
              <th className="text-center">
                <div className="image-container">
                  <img
                    className="parent"
                    src={frenadas}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                  <br />
                </div>
                <p>Frenadas Bruscas</p>
              </th>
              <th className="text-center">
                <div className="image-container">
                  <img
                    className="parent"
                    src={curvas}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                  <br />
                </div>
                <p>Curvas Agresivas</p>
              </th>
              <th
                className="text-center"
                style={{ background: "#2196F3", color: "white" }}
              >
                <div className="image-container">
                  <img
                    className="parent"
                    src={descenso}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                  <br />
                </div>
                <p>Descenso en Neutro</p>
              </th>
              <th
                className="text-center"
                style={{ background: "#2196F3", color: "white" }}
              >
                <div className="image-container">
                  <img
                    className="parent"
                    src={tiempoexceso}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                  <br />
                </div>
                <p>Tiempo en Exceso de Velocidad hh:mm:ss</p>
              </th>
              <th
                className="text-center"
                style={{ background: "#2196F3", color: "white" }}
              >
                <div className="image-container">
                  <img
                    className="parent"
                    src={distanciaexceso}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                  <br />
                </div>
                <p>Distancia en Exceso de Velocidad Km</p>
              </th>
              <th
                className="text-center"
                style={{ background: "#2196F3", color: "white" }}
              >
                <div className="image-container">
                  <img
                    className="parent"
                    src={reposo}
                    style={{
                      height: 50,
                      width: 50,
                    }}
                  />
                  <br />
                </div>
                <p>Reposo hh:mm:ss</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>Actual</td>
              <td>{current.overspd.overspdDist}</td>
              <td>{current.harshAccel}</td>
              <td>{current.harshBrake}</td>
              <td>{current.aggrCurves}</td>
              <td>null</td>
              <td>{current.overspd.ovrspdTime}</td>
              <td>{current.overspd.overspdDist}</td>
              <td>{current.securityScore}</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Anterior</td>
              <td>{previous.overspd.overspdDist}</td>
              <td>{previous.harshAccel}</td>
              <td>{previous.harshBrake}</td>
              <td>{previous.aggrCurves}</td>
              <td>null</td>
              <td>{previous.overspd.ovrspdTime}</td>
              <td>{previous.overspd.overspdDist}</td>
              <td>{previous.securityScore}</td>
            </tr>
            <tr style={{ justifyContent: "center" }}>
              <td>Desempeño</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {parseInt(current.overspd.overspdDist) ===
                  parseInt(previous.overspd.overspdDist) ? (
                    <FaGripLines
                      size={25}
                      style={{ textAlign: "center", color: "skyblue" }}
                    />
                  ) : parseInt(current.overspd.overspdDist) >
                    parseInt(previous.overspd.overspdDist) ? (
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
                  {parseInt(current.harshAccel) ===
                  parseInt(previous.harshAccel) ? (
                    <FaGripLines
                      size={25}
                      style={{ textAlign: "center", color: "skyblue" }}
                    />
                  ) : parseInt(current.harshAccel) >
                    parseInt(previous.harshAccel) ? (
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
                  {parseInt(current.harshBrake) ===
                  parseInt(previous.harshBrake) ? (
                    <FaGripLines
                      size={25}
                      style={{ textAlign: "center", color: "skyblue" }}
                    />
                  ) : parseInt(current.harshBrake) >
                    parseInt(previous.harshBrake) ? (
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
                  {parseInt(current.aggrCurves) ==
                  parseInt(previous.aggrCurves) ? (
                    <FaGripLines
                      size={25}
                      style={{ textAlign: "center", color: "skyblue" }}
                    />
                  ) : parseInt(current.aggrCurves) >
                    parseInt(previous.aggrCurves) ? (
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
                  <FaGripLines
                    size={25}
                    style={{ textAlign: "center", color: "skyblue" }}
                  />
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
                  {convertTime(current.overspd.ovrspdTime) ===
                  convertTime(previous.overspd.ovrspdTime) ? (
                    <FaGripLines
                      size={25}
                      style={{ textAlign: "center", color: "skyblue" }}
                    />
                  ) : convertTime(current.overspd.ovrspdTime) >
                    convertTime(previous.overspd.ovrspdTime) ? (
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
                  {current.overspd.overspdDist ===
                  previous.overspd.overspdDist ? (
                    <FaGripLines
                      size={25}
                      style={{ textAlign: "center", color: "skyblue" }}
                    />
                  ) : current.overspd.overspdDist >
                    previous.overspd.overspdDist ? (
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
                  {parseInt(current.securityScore) ==
                  parseInt(previous.securityScore) ? (
                    <FaGripLines
                      size={25}
                      style={{ textAlign: "center", color: "skyblue" }}
                    />
                  ) : parseInt(current.securityScore) >
                    parseInt(previous.securityScore) ? (
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
    </>
  );
};

export default TableSecurityVehicles;
