import React, { useRef } from "react";
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

// import activetrac from "../../../../components/imagesSecurity/activetrac.png";
import avgspd from "../../../../components/imagesSecurity/avgspd.png";
import aceleraciones from "../../../../components/imagesSecurity/aceleraciones.png";
import curvas from "../../../../components/imagesSecurity/curvas.png";
import descenso from "../../../../components/imagesSecurity/descenso.png";
import distanciaexceso from "../../../../components/imagesSecurity/distanciaexceso.png";
import frenadas from "../../../../components/imagesSecurity/frenadas.png";
import reposo from "../../../../components/imagesSecurity/reposo.png";
import tiempoexceso from "../../../../components/imagesSecurity/tiempoexceso.png";
import { Document, Page } from "@react-pdf/renderer";
import Printer, { print } from "react-pdf-print";
import "./image.css";
import Example from "../Example";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import ReactPDF from "@react-pdf/renderer";
/* ES6 */
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const TableSecurity = ({
  current,
  previous,
  driverInformation,
  timeLapsInformation,
}) => {
  // console.log(current);
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
    // console.log(str);
    var time = new Date();
    time.setHours(str.split(":")[0], str.split(":")[1], str.split(":")[2]);
    // console.log(time);
    return time;
  };
  let componentRef = useRef();
  const ids = ["1"];

  const styles = {
    center: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  const TableVehicles = () => {
    return driverInformation.drivenVehicles.map((item, id) => {
      return (
        <tr key={id}>
          <td className="text-center">{item.vehicle}</td>
        </tr>
      );
    });
  };

  const TableVehiclesNoData = () => {
    return (
      <tr>
        <td className="text-center">No hay datos</td>
      </tr>
    );
  };

  return (
    <>
      <Document>
        <Page size="A4">
          <Form.Group as={Row}>
            {/* <div className="App">
              <Printer>
                <div id={ids[0]} style={{ width: "210mm", height: "297mm" }}>
                  Hello World!
                </div>
              </Printer>
              <input
                type="button"
                style={{ position: "relative", float: "right" }}
                onClick={() => print(ids)}
                value="Stampa"
              />
            </div> */}
            <Col sm="6">
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
                Conductor: {driverInformation.assetName}
                <br />
                Cemex ID: {driverInformation.cemexDriverCode}
                <br />
              </Form.Label>
            </Col>
            <Col sm="6" style={{ textAlign: "right" }}>
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
                        <th className="text-center">
                          <div className="image-container">
                            <br />
                          </div>
                          <p>Vehículos Asociados</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {driverInformation.drivenVehicles.length === 0 ? (
                        <TableVehiclesNoData />
                      ) : (
                        <TableVehicles />
                      )}
                    </tbody>
                  </Table>
                </div>
              </Form.Label>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-5 mt-10  mr-1 ml-1">
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
                <tr>
                  <th
                    className="text-center th-sm"
                    style={{
                      background: "#2196F3",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <p>Periodo</p>
                  </th>
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
                  <th
                    className="text-center th-sm"
                    style={{ background: "#2196F3", color: "white" }}
                  >
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
                  <th
                    className="text-center"
                    style={{ background: "#2196F3", color: "white" }}
                  >
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
                  <th
                    className="text-center"
                    style={{ background: "#2196F3", color: "white" }}
                  >
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
                  <td>{current.coasting}</td>
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
                  <td>{previous.coasting}</td>
                  <td>{previous.overspd.ovrspdTime}</td>
                  <td>{previous.overspd.overspdDist}</td>
                  <td>{previous.securityScore}</td>
                </tr>
                <tr>
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
                          style={{
                            textAlign: "center",
                            alignSelf: "center",
                            flexDirection: "column",
                          }}
                        />
                      ) : parseInt(current.overspd.overspdDist) >
                        parseInt(previous.overspd.overspdDist) ? (
                        <FaArrowAltCircleUp
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            color: "green",
                          }}
                          size={25}
                        />
                      ) : (
                        <FaArrowAltCircleDown
                          size={25}
                          style={{ textAlign: "center", color: "red" }}
                        />
                      )}
                    </div>
                  </td>
                  <td
                    style={{
                      display: "auto",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {parseInt(current.harshAccel) ==
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
                      {parseInt(current.harshBrake) ==
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
                      {parseInt(current.coasting) ==
                      parseInt(previous.coasting) ? (
                        <FaGripLines
                          size={25}
                          style={{ textAlign: "center", color: "skyblue" }}
                        />
                      ) : parseInt(current.coasting) >
                        parseInt(previous.coasting) ? (
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
                      {convertTime(current.overspd.ovrspdTime) ==
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
                          className="d-block mx-auto img-fluid"
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
                      {parseInt(current.securityScore) ===
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
        </Page>
      </Document>
    </>
  );
};

export default TableSecurity;
