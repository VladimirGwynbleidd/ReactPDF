import React, { useRef, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { Form } from "react-bootstrap";
import { Card, Row, Col, CardTitle, CardBody } from "reactstrap";
import Button from "@mui/material/Button";
import AsyncSelect from "react-select/async";
import Fechas from "../../../components/Fechas/Fechas";
import { GetAPIByID } from "../../../Services/api/ServiceGeneric";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useForm } from "react-hook-form";
import TableSecurityVehicles from "./EventosVehicles/TableSecurityVehicles";
import TableEngineVehicles from "./EventosVehicles/TableEngineVehicles";
import TableScoreVehicles from "./EventosVehicles/TableScoreVehicles";
import TableRPMVehicles from "./EventosVehicles/TableRPMVehicles";
import TablePedalEventsVehicles from "./EventosVehicles/TablePedalEventsVehicles";
import ChartBarVehicles from "./ChartBarVehicles";
import { PDFGenerate } from "components/PDF/PDFGenerate";
import { useEffect } from "react";
import { useCallback } from "react";
import TableRecommendation from "./EventosVehicles/TableRecommendation";
import html2pdf from "html2pdf.js";
const Vehicles = ({ data }) => {
  // const [selected, setSelected] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [ulrDrivers, setUlrDrivers] = useState("Vehicles");
  const { register, handleSubmit } = useForm();
  const [vehicleInformation, setVehicleInformation] = useState([]);
  const [timeLapsInformation, setTimeLapsInformation] = useState([]);
  const [showSecurity, setShowSecurity] = useState(false);
  const [securityCurrentData, setSecurityCurrentData] = useState([]);
  const [securityPrevData, setSecurityPrevData] = useState([]);

  const [operationCurrentData, setOperationCurrentData] = useState([]);
  const [operationPrevData, setOperationPrevData] = useState([]);
  const inputRef = useRef(null);
  const [finalScore, setFinalScore] = useState([]);

  useEffect(() => {
    setFinalScore([]);
  }, []);

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  // // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    console.log(value);
    setSelectedValue(value);
  };

  const OnChangeStartDate = (date) => {
    setStartDate(date.format());
    console.log(date.format());
  };

  const OnChangeEndDate = (date) => {
    setEndDate(date.format());
    console.log(date.format());
  };

  const OnInputChangeDriver = (value) => {
    setValue(value);
    console.log(value);
  };

  // handle selection
  const OnChangeDriver = (value) => {
    setSelectedValue(value);
    console.log(value);
  };

  const convert = (str) => {
    // console.log(str);
    // var date = new Date(str),
    //   mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //   day = ("0" + date.getDate()).slice(-2);
    var yourdate = str.split("/").reverse().join("-");
    return yourdate;
    // return [date.getFullYear(), mnth, day].join("-");
  };

  const OnInputChangeVehicle = (value) => {
    setValue(value);
    console.log(value);
  };

  // handle selection
  const OnChangevehicle = (value) => {
    setSelectedValue(value);
    console.log(value);
  };

  const onSubmit = useCallback(async () => {
    const data = {
      startDate: convert(startDate),
      endDate: convert(endDate),
      id: selectedValue.pegasusId,
    };
    console.log(data);
    //const fecha = data;
    // console.log(fecha);
    const resultVehicles = await GetVehicles(data);

    //Driver Information
    setVehicleInformation(resultVehicles.data.vehicleInformation);

    setTimeLapsInformation(resultVehicles.data.timeLapsInformation);

    //Seguridad
    setSecurityCurrentData(resultVehicles.data.securityCurrentData);
    setSecurityPrevData(resultVehicles.data.securityPrevData);

    //Motor
    setOperationCurrentData(resultVehicles.data.operationCurrentData);
    setOperationPrevData(resultVehicles.data.operationPrevData);

    //Calificación Final
    setFinalScore(resultVehicles.data.finalScore);

    setShowSecurity(true);

    //console.log(data);
  });

  const GetVehicles = async (data) => {
    const vehiclesInformation = await GetAPIByID(ulrDrivers + "/id", data);
    console.log(vehiclesInformation);
    return vehiclesInformation;
  };

  const createPDF = () => {
    var element = document.getElementById("canvas_div_pdf");
    var opt = {
      margin: 0,
      filename: "Reporte.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "mm",
        format: [490, 380],
        orientation: "portrait",
      },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <Row>
      <Col>
        <Card>
          {/* <CardTitle
            lg="12"
            tag="h2"
            className="border-bottom p-3 mb-0 text-centered"
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            Camiones
          </CardTitle> */}
          <CardBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                as={Row}
                className="mb-5"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3" className="font-light">
                  Seleccione el camión a calificar:
                </Form.Label>
                <Col sm="6">
                  <Select
                    className="font-light"
                    style={{ width: "70%", backgroundColor: "green" }}
                    placeholder="Seleccione el conductor a calificar"
                    options={data}
                    getOptionLabel={(e) => e.name}
                    getOptionValue={(e) => e.pegasusId}
                    onChange={OnChangevehicle}
                    onInputChange={OnInputChangeVehicle}
                    // filterOption={customFilter}
                  ></Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-8 font-light">
                <Form.Label column sm="3">
                  Rango de Fechas
                </Form.Label>
                <Col sm="3">
                  <Form.Group>
                    <div className="group">
                      <Fechas
                        date={startDate}
                        onChangeDate={OnChangeStartDate}
                        className="font-light"
                      />
                      <span className="font-light"></span>
                      <span className="bar"></span>
                      <label>Fecha Inicial</label>
                    </div>
                  </Form.Group>
                </Col>
                <Col sm="3">
                  <Form.Group>
                    <div className="group">
                      <Fechas
                        date={endDate}
                        onChangeDate={OnChangeEndDate}
                        className="font-light"
                      />
                      <span className="font-light"></span>
                      <span className="bar"></span>
                      <label>Fecha Final</label>
                    </div>
                  </Form.Group>
                </Col>
              </Form.Group>
              <Box
                sx={{
                  height: 80,
                  transform: "translateZ(0px)",
                  flexGrow: 1,
                }}
              >
                <Button type="submit" sx={{ position: "absolute", right: 16 }}>
                  <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    icon={<PlayArrowIcon />}
                  ></SpeedDial>
                </Button>
              </Box>
            </Form>
            {showSecurity && (
              <button
                style={{
                  position: "absolute",
                  right: 20,
                  top: 5,
                }}
                onClick={createPDF}
                className="btn"
                color="primary"
              >
                <span
                  className="bi bi-file-pdf"
                  style={{ fontSize: 25 }}
                ></span>
              </button>
            )}
            <div id="canvas_div_pdf" ref={inputRef}>
              {/* {showSecurity && <PDFGenerate />} */}
              <Form className="mb-4">
                {/* <Printer>
                <div id={ids[0]}> */}
                {showSecurity && (
                  <TableSecurityVehicles
                    current={securityCurrentData}
                    previous={securityPrevData}
                    vehicleInformation={vehicleInformation}
                    timeLapsInformation={timeLapsInformation}
                  />
                )}
                {/* </div>
              </Printer> */}

                {showSecurity && (
                  <TableEngineVehicles
                    current={operationCurrentData}
                    previous={operationPrevData}
                  />
                )}
                {showSecurity && (
                  <TableScoreVehicles
                    securityCurrent={securityCurrentData}
                    securityPrev={securityPrevData}
                    operationCurrent={operationCurrentData}
                    operationPrev={operationPrevData}
                    finalScoreCurrent={finalScore}
                  />
                )}
              </Form>
              <Form>
                <Row>
                  <Col sm="5">
                    <Form.Group as={Row} className="mb-5">
                      {showSecurity && (
                        <TableRPMVehicles
                          current={operationCurrentData.rpmEvents}
                        />
                      )}
                    </Form.Group>
                  </Col>
                  <Col sm="5">
                    <Form.Group as={Row} className="mb-10">
                      {showSecurity && (
                        <TablePedalEventsVehicles
                          current={operationCurrentData.pedalEvents}
                        />
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Form>

              <Form>
                <Row>
                  <Col sm="10">
                    <Form.Group as={Row} className="mb-10 mt-20">
                      {showSecurity && (
                        <TableRecommendation
                          current={securityCurrentData}
                          previous={securityPrevData}
                        />
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Form>

              {/* <Form>
                <Row>
                  <Col sm="6">
                    <Form.Group as={Row} className="mb-5">
                      {showSecurity && (
                        <ChartBarVehicles
                          securityCurrent={securityCurrentData}
                          securityPrev={securityPrevData}
                        />
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </Form> */}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Vehicles;
