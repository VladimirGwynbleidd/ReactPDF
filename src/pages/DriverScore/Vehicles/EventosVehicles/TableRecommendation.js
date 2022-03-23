import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import brake from "../../../../components/imagesRecomendacion/brake.png";
import clutchdisc from "../../../../components/imagesRecomendacion/clutch-disc.png";
import curves from "../../../../components/imagesRecomendacion/curves.png";
import diesel from "../../../../components/imagesRecomendacion/diesel.png";
import rpmidl from "../../../../components/imagesRecomendacion/rpmidl.png";
import "../../Vehicles/image.css";
const TableRecommendation = ({ current, previous }) => {
  console.log("Recommendation");
  console.log(current);
  console.log(previous);
  return (
    <>
      <Table
        style={{ width: "100%", border: "1px solid rgb(0, 0, 0)" }}
        className="mr-1 ml-4 mt-40"
      >
        <tr>
          {parseInt(current.securityScore) >
          parseInt(previous.securityScore) ? (
            <>
              <td
                style={{
                  height: 70,
                  width: 70,
                }}
              >
                <img
                  className="table-borderless-img"
                  src={diesel}
                  style={{
                    height: 70,
                    width: 70,
                  }}
                />
              </td>
              <td>
                <ul>
                  <li
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                  >
                    Idle mas de 30 minutos
                  </li>
                  <li
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                  >
                    Recomendación:
                  </li>
                  <li style={{ fontSize: "18px", width: "100%" }}>
                    Una vez finalizado el viaje asignado se deberá de apagar la
                    unidad una vez llegado a planta.
                  </li>
                </ul>
              </td>
            </>
          ) : (
            <></>
          )}
        </tr>
        <tr>
          {parseInt(current.harshAccel) > parseInt(previous.harshAccel) ? (
            <>
              <td
                style={{
                  height: 70,
                  width: 70,
                }}
              >
                <img
                  className="table-borderless-img"
                  src={rpmidl}
                  style={{
                    height: 70,
                    width: 70,
                  }}
                />
              </td>
              <td>
                <ul>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Exceso de revoluciones con vehículo detenido RPM 1400+
                    vel=0kph
                  </li>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Recomendación:
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    No es necesario revolucionar el motor mientras el vehículo
                    no esté en movimiento.
                  </li>
                </ul>
              </td>
            </>
          ) : (
            <></>
          )}
        </tr>
        <tr>
          {parseInt(current.harshBrake) > parseInt(previous.harshBrake) ? (
            <>
              <td
                style={{
                  height: 70,
                  width: 70,
                }}
              >
                <img
                  className="table-borderless-img"
                  src={clutchdisc}
                  style={{
                    height: 70,
                    width: 70,
                  }}
                />
              </td>
              <td>
                <ul>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Embrague oprimido por 10+ segundos, detenido y sin freno
                  </li>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Recomendación:
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    No mantener en modo de descanso el pie en el embrague al
                    tener la unidad en movimiento.
                  </li>
                </ul>
              </td>
            </>
          ) : (
            <></>
          )}
        </tr>
        <tr>
          {parseInt(current.harshBrake) > parseInt(previous.harshBrake) ? (
            <>
              <td
                style={{
                  height: 70,
                  width: 70,
                }}
              >
                <img
                  className="table-borderless-img"
                  src={clutchdisc}
                  style={{
                    height: 70,
                    width: 70,
                  }}
                />
              </td>
              <td>
                <ul>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Embrague presionado mas de 20 segundos en movimiento
                  </li>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Recomendación:
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    No mantener en modo de descanso el pie en el embrague al
                    tener la unidad en movimiento.
                  </li>
                </ul>
              </td>
            </>
          ) : (
            <></>
          )}
        </tr>
        <tr>
          {parseInt(current.harshBrake) > parseInt(previous.harshBrake) ? (
            <>
              <td
                style={{
                  height: 70,
                  width: 70,
                }}
              >
                <img
                  className="table-borderless-img"
                  src={clutchdisc}
                  style={{
                    height: 70,
                    width: 70,
                  }}
                />
              </td>
              <td>
                <ul>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Embrague presionado mas de 30 segundos en detención
                  </li>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Recomendación:
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    No mantener en modo de descanso el pie en el embrague.
                  </li>
                </ul>
              </td>
            </>
          ) : (
            <></>
          )}
        </tr>
        <tr>
          {parseInt(current.aggrCurves) > parseInt(previous.aggrCurves) ? (
            <>
              <td
                style={{
                  height: 70,
                  width: 70,
                }}
              >
                <img
                  className="table-borderless-img"
                  src={curves}
                  style={{
                    height: 70,
                    width: 70,
                  }}
                />
              </td>
              <td>
                <ul>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Curvas Agresivas
                  </li>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Recomendación:
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    Mantener una velocidad controlada a la ruta asignada de 2 a
                    4 rpm por minuto del tambor, dependiendo de la carga del
                    producto.
                  </li>
                </ul>
              </td>
            </>
          ) : (
            <></>
          )}
        </tr>
        <tr>
          {parseInt(current.harshBrake) > parseInt(previous.harshBrake) ? (
            <>
              <td
                style={{
                  height: 70,
                  width: 70,
                }}
              >
                <img
                  className="table-borderless-img"
                  src={brake}
                  style={{
                    height: 70,
                    width: 70,
                  }}
                />
              </td>
              <td>
                <ul>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Freno presionado por más de 10 segundos en movimiento
                  </li>
                  <li style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Recomendación:
                  </li>
                  <li style={{ fontSize: "18px" }}>
                    Evite descansar el pie en el freno. Frene firmemente sin
                    llegar a la brusquedad. Mantenga un espacio prudente con el
                    vehículo de adelante.
                  </li>
                </ul>
              </td>
            </>
          ) : (
            <></>
          )}
        </tr>
      </Table>
    </>
  );
};

export default TableRecommendation;
