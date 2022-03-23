import React from "react";
import { Table } from "reactstrap";
import { Form } from "react-bootstrap";
import { Row, Col, CardTitle, CardBody, Input, Card } from "reactstrap";
import TableRecommendation from "pages/DriverScore/Vehicles/EventosVehicles/TableRecommendation";

const EvaluateRecommendations = ({securityCurrentData,securityPrevData}) => {
  return (
    <>
      <TableRecommendation
        current={securityCurrentData}
        previous={securityPrevData}
      />
    </>
  );
};

export default EvaluateRecommendations;
