import React, { useEffect, useState } from "react";
// import { Col, Row } from "reactstrap";
import axios from "axios";
// import fetch from "fetch";
import Button from "@material-tailwind/react/Button";
import StatusCard from "components/StatusCard";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
// import Image from "@material-tailwind/react/Image";
// import Progress from "@material-tailwind/react/Progress";
// import Team1 from "assets/img/team-1-800x800.jpg";
// import Team2 from "assets/img/team-2-800x800.jpg";
// import Team3 from "assets/img/team-3-800x800.jpg";
// import Team4 from "assets/img/team-4-470x470.png";
// import Modal from "./countries/Modal";
//import useModal from "./countries/useModal";
// import App from "./countries/Modal.css";
import "bootstrap/dist/css/bootstrap.css";
// import { AddForm } from "./countries/AddForm";
// import { Modal, Form } from "react-bootstrap";

// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ModalCreate from "./countries/ModalsCountry/ModalCreate";
import ModalUpdate from "./countries/ModalsCountry/ModalUpdate";
import ModalDelete from "./countries/ModalsCountry/ModalDelete";
import TableCountry from "./countries/TableCountry/TableCountry";

export default function Dashboard(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState({
    name: "",
    code: "",
    createdby: "",
    tenantid: "",
  });
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [cursor, setCursor] = useState("crosshair");

  // const styles = StyleSheet.create({
  //   page: {
  //     flexDirection: "row",
  //     backgroundColor: "#E4E4E4",
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1,
  //   },
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: country.id,
      name: country.name,
      code: country.code,
      createdby: "seed",
      tenantid: 1,
    };
    console.log(data);
    const result = axios
      .post("https://localhost:5001/reports/Countries", data)
      .then((result) => {
        printValue();
        handleClose();
        console.log(result);
        //props.history.push("/country");
      });
    console.log(result);
  };

  // const [country, setcountry] = useState({
  //   tenantid: "",
  //   id: "",
  //   name: "",
  //   code: "",
  // });
  //const { isShowing, toggle } = useModal();
  //console.log(props);

  useEffect(() => {
    const GetData = async () => {
      // const result = await axios("http://127.0.0.1:8000/usuario");
      const result = await axios.get(
        "https://localhost:5001/reports/Countries/1",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(result.data);
      setData(result.data);
    };
    GetData();
  }, []);

  const onInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCountry({ ...country, [name]: value });
    console.log(country);
  };

  // const renderHeader = () => {
  //   let headerElement = ["id", "name", "code"];

  //   return headerElement.map((key, index) => {
  //     return <th key={index}>{key.toUpperCase()}</th>;
  //   });
  // };

  // const renderBody = () => {
  //   return (
  //     data &&
  //     data.map((item, id) => {
  //       return (
  //         <tr key={id}>
  //           <td>{item.id}</td>
  //           <td>{item.Name}</td>
  //         </tr>
  //       );
  //     })
  //   );
  // };

  const UpdateEmployee = async (e) => {
    e.preventDefault();
    const data = {
      id: country.id,
      name: country.name,
      code: country.code,
    };
    console.log(data);
    await axios
      .put("https://localhost:5001/reports/Countries/" + country.id, data)
      .then((result) => {
        printValue();
        console.log(result);
        abrirCerrarModalEditar();
      });
  };

  const printValue = async () => {
    const getCountries = await axios.get(
      "https://localhost:5001/reports/Countries/1",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(getCountries);
    setData(getCountries.data);
  };
  const DeleteEmployee = () => {
    debugger;
    console.log(country);
    axios
      .delete("https://localhost:5001/reports/Countries/" + country.id)
      .then((result) => {
        printValue();
        abrirCerrarModalEliminar();
        console.log(result);
        // props.history.push("/country");
      });
  };

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const seleccionarConsola = (consola, caso) => {
    setCountry(consola);
    console.log(caso);
    caso === "Editar" ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();

    setCursor((prevState) => {
      if (prevState === "crosshair") {
        return "pointer";
      }
      return "crosshair";
    });
  };

  // const MyDocument = () => (
  //   <Document>
  //     <Page size="A4" style={styles.page}>
  //       <View style={styles.section}>
  //         <Text>Section #1</Text>
  //       </View>
  //       <View style={styles.section}>
  //         <Text>Section #2</Text>
  //       </View>
  //     </Page>
  //   </Document>
  // );
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="orange"
              icon="groups"
              title="New Users"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
          </div>
        </div>
      </div>
      <ModalCreate
        show={show}
        handleClose={handleClose}
        onInputChange={onInputChange}
        handleSubmit={handleSubmit}
      />
      <ModalUpdate
        modalEditar={modalEditar}
        abrirCerrarModalEditar={abrirCerrarModalEditar}
        UpdateEmployee={UpdateEmployee}
        onInputChange={onInputChange}
        country={country}
      />

      <ModalDelete
        modalEliminar={modalEliminar}
        abrirCerrarModalEliminar={abrirCerrarModalEliminar}
        deleteEmployee={DeleteEmployee}
      />

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <Card>
              <CardHeader color="purple" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-white text-2xl">Country</h2>

                  <Button
                    onClick={handleShow}
                    buttonType="link"
                    color="transparent"
                    data-toggle="modal"
                    size="lg"
                    style={{ padding: 0 }}
                  >
                    New Country
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <div className="overflow-x-auto">
                  <TableCountry
                    seleccionarConsola={seleccionarConsola}
                    data={data}
                    cursor={cursor}
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
