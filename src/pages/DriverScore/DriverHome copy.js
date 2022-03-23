import React, { useEffect, useState } from "react";
import Drivers from "./Drivers/Drivers";
import Vehicles from "./Vehicles/Vehicles";
// import { CWidgetStatsD, CRow, CCol, CWidgetStatsA } from "@coreui/react";
import Button from "@material-tailwind/react/Button";
import StatusCard from "components/StatusCard";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

import { GetAPI } from "../../Services/api/ServiceGeneric";
import { Form } from "react-bootstrap";

const DriverHome = () => {
  const [dataDriver, setDataDriver] = useState([]);
  const [dataVehicles, setDataVehicles] = useState([]);
  const [ulrDrivers, setUlrDrivers] = useState("Assets");
  const [ulrVehicles, setUlrVehicles] = useState("Vehicles");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Conductores");

  useEffect(() => {
    const GetDataDrivers = async () => {
      const resultDrivers = await GetAPI(ulrDrivers);
      setDataDriver(resultDrivers);
      console.log("resultDrivers");
      console.log(resultDrivers);
    };

    const GetDataVehicles = async () => {
      const resultVehicles = await GetAPI(ulrVehicles);
      setDataVehicles(resultVehicles);
      console.log("resultVehicles");
      console.log(resultVehicles);
    };
    GetDataDrivers();
    GetDataVehicles();
  }, []);

  const [showDriver, setShowDriver] = useState(true);
  const [showVehicles, setShowVehicles] = useState(false);

  const DriversForm = () => {
    setShowVehicles(false);
    setShowDriver(true);
    setTitle("Conductores")
  };

  const VehiclesForm = () => {
    setShowVehicles(true);
    setShowDriver(false);
    setTitle("Camiones")
  };

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <Form onClick={DriversForm}>
              <StatusCard
                color="blue"
                icon="portrait"
                title="Conductores"
                amount={dataDriver.length}
                percentageColor="red"
              />
            </Form>
            <Form onClick={VehiclesForm}>
              <StatusCard
                color="purple"
                icon="time_to_leave"
                title="Camiones"
                amount={dataVehicles.length}
              ></StatusCard>
            </Form>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <Card>
              <CardHeader color="lightBlue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-white text-2xl">{title}</h2>
                </div>
              </CardHeader>
              <CardBody>
                <div>
                  {showDriver && <Drivers data={dataDriver} />}
                  {showVehicles && <Vehicles data={dataVehicles} />}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverHome;
