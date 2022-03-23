import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import scoreFinal from "../../../../components/imagesScore/scoreFinal.png";
import scoreOperation from "../../../../components/imagesScore/scoreOperation.png";
import scoreSecurity from "../../../../components/imagesScore/scoreSecurity.png";
const TableScoreVehicles = ({
  securityCurrent,
  securityPrev,
  operationCurrent,
  operationPrev,
  finalScoreCurrent,
}) => {
  // console.log(securityCurrent.securityScore);
  // console.log(parseInt(securityPrev.securityScore));
  console.log("first");
  console.log(finalScoreCurrent);
  // const [current, setCurrent] = useState(
  //   parseInt(securityCurrent.securityScore)
  // );
  // const [previous, setPrevious] = useState(
  //   parseInt(securityPrevData.securityScore)
  // );
  const [securityCurrentData, setSecurityCurrentData] = useState(
    securityCurrent.securityScore
  );
  const [securityPrevData, setSecurityPrevData] = useState(
    securityPrev.securityScore
  );

  const [operationCurrentData, setOperationCurrentData] = useState(
    operationCurrent.operativeScore
  );
  const [operationPrevData, setOperationPrevData] = useState(
    operationPrev.operativeScore
  );

  const [finalScore, setFinalScore] = useState(finalScoreCurrent);

  // const onChangeCommitted = (e) => {
  //   setCurrent(securityCurrent.securityScore);
  // };
  useEffect(() => {
    // setSecurityCurrentData(parseInt(securityCurrentData.securityScore));
    // setSecurityPrevData(parseInt(securityPrevData.securityScore));
    // setOperationCurrentData(parseInt(operationCurrent.operativeScore));
    // setOperationPrevData(parseInt(operationPrev));
    // setFinalScore(finalScoreCurrent);
    // console.log(finalScore);
  }, [finalScoreCurrent]);

  return (
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
                src={scoreOperation}
                style={{
                  height: 50,
                  width: 50,
                }}
              />
              <br />
            </div>
            <p>Calificación de Operación 0-100</p>
          </th>
          <th className="text-center">
            <div className="image-container">
              <img
                className="parent"
                src={scoreSecurity}
                style={{
                  height: 50,
                  width: 50,
                }}
              />
              <br />
            </div>
            <p>Calificación de Seguridad 0-100</p>
          </th>
          <th className="text-center">
            <div className="image-container">
              <img
                className="parent"
                src={scoreFinal}
                style={{
                  height: 50,
                  width: 50,
                }}
              />
              <br />
            </div>
            <p>Calificación Final: Promedio 0-100</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Actual</td>
          <td>
            <Slider
              size="large"
              valueLabelDisplay="auto"
              marks
              step={10}
              min={10}
              max={100}
              defaultValue={securityCurrentData}
              color="secondary"
              block
            />
          </td>
          <td>
            <Slider
              size="large"
              valueLabelDisplay="auto"
              marks
              step={10}
              min={10}
              max={100}
              defaultValue={operationCurrentData}
              color="primary"
              block
            />
          </td>
          <td>
            <Slider
              size="large"
              valueLabelDisplay="auto"
              marks
              step={10}
              min={10}
              max={100}
              defaultValue={finalScore.avgCurrentScore}
              color="success"
              block
            />
          </td>
        </tr>
        <tr>
          <td>Anterior</td>
          <td>
            <Slider
              size="large"
              valueLabelDisplay="auto"
              marks
              step={10}
              min={10}
              max={100}
              defaultValue={securityPrevData}
              color="secondary"
              block
            />
          </td>
          <td>
            <Slider
              size="large"
              valueLabelDisplay="auto"
              marks
              step={10}
              min={10}
              max={100}
              defaultValue={operationPrevData}
              color="primary"
              block
            />
          </td>
          <td>
            <Slider
              size="large"
              valueLabelDisplay={"auto"}
              marks
              step={10}
              min={10}
              max={100}
              defaultValue={finalScore.avgPrevScore}
              color="success"
              block
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableScoreVehicles;
