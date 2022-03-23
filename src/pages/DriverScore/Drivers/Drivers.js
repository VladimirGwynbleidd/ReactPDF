import React, { useEffect, useState, useRef } from "react";
import Select, { components } from "react-select";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
// import { useForm, Controller } from "react-hook-form";
import { Row, Col, CardTitle, CardBody, Card } from "reactstrap";
// import "react-datepicker/dist/react-datepicker.css";

// import'../../DriverScore/calendar.css'
// import "../../DriverScore/Dropdown.scss";

// import { Form } from "react-bootstrap";

// import { registerLocale } from "react-datepicker";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "datatables.net-dt";
// import 'datatables.net-dt/css/jquery.dataTables.min.css'

// import es from "date-fns/locale/es";

import { PDFGenerate } from "../../../components/PDF/PDFGenerate";
import Fechas from "../../../components/Fechas/Fechas";
import TableDrivers from "../Table/TableDrivers";
// import Dropdown from "../Drivers/Dropdown";
// import "antd/dist/antd.css";
// import { DatePicker } from "antd";
import axios from "axios";
import AsyncSelect from "react-select/async";
import MaterialTable from "material-table";
// import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import StatusCard from "components/StatusCard";
// import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
// import CardBody from "@material-tailwind/react/CardBody";
import "../../DriverScore/calendar.css";
import { GetAPI, GetAPIByID } from "../../../Services/api/ServiceGeneric";
import jsPDF from "jspdf";
import "jspdf-autotable";
import CEMEX from "../../../components/imagesSecurity/cemex.png";
import TableSecurity from "./EventosDrivers/TableSecurity";
import TableEngine from "./EventosDrivers/TableEngine";
import TablePedalEvents from "./EventosDrivers/TablePedalEvents";
import TableRPM from "./EventosDrivers/TableRPM";
import TableScore from "./EventosDrivers/TableScore";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import Printer, { print } from "react-pdf-print";
import { useReactToPrint } from "react-to-print";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Example from "../Drivers/Example";
import ChartLine from "components/ChartLine";
import ChartBar from "./ChartBar";
import html2canvas from "html2canvas";
import ReactDOMServer from "react-dom/server";
import SelectSearch from "react-select-search";
import { useSelect } from "react-select-search";
import { MultiSelect } from "react-multi-select-component";
import TableRecommendation from "../Vehicles/EventosVehicles/TableRecommendation";
import { Preview, print } from "react-html2pdf";
import html2pdf from "html2pdf.js";
// import styled from "styled-components";
// import Dropdown from "react-dropdown";
import Input from "@material-tailwind/react/Input";
// import InputIcon from "@material-tailwind/react/InputIcon";
import { Key } from "react-bootstrap-icons";
// import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
//import useForm from "./UseForm";
import validate from "./LoginFormValidationRules";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker, { DateObject } from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import InputIcon from "react-multi-date-picker/components/input_icon";

import { Form } from "react-bootstrap";

// import { Document, Page } from "react-pdf";
const $ = require("jquery");
// $.DataTable = require("datatables.net");

// registerLocale("es", es);

const Drivers = ({ data }) => {
  const [valueinput, setValueInput] = React.useState("");
  const [error, setError] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const validate = () => {
    const error = valueinput.length > 0 ? "" : "This is a required field";
    setError(error);
  };

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Deciembre",
  ];
  const weekDays = [
    ["Dom", "Dom"], //[["name","shortName"], ... ]
    ["Lun", "Lun"],
    ["Mar", "Mar"],
    ["Mie", "Mie"],
    ["Jue", "Jue"],
    ["Vie", "Vie"],
    ["Sáb", "Sab"],
  ];

  // const [data, setData] = useState([]);
  const [selected, setSelected] = useState("");

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [busqueda, setBusqueda] = useState(null);

  const onChangeSelect = ({ target }) => {
    const selectedData = target.value;
    setSelected(selectedData);
    console.log(selectedData);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [ulrDrivers, setUlrDrivers] = useState("Assets");
  const [ulrVehicles, setUlrVehicles] = useState("Vehicles");
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);
  const [name, setName] = useState("");
  const [inputValues, setInputValue] = useState({
    fSelect: "",
    fechaInicial: "",
    fechaFinal: "",
  });

  const [validation, setValidation] = useState({
    fSelect: "",
    fechaInicial: "",
    fechaFinal: "",
  });

  const results = !searchTerm
    ? data
    : data.filter(({ displayName }) =>
        displayName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  const ResultsGeneric = () => {
    let resultaData = data.filter(
      (x) => parseInt(x.pegasusId) === parseInt(searchTerm)
    );

    return resultaData;
  };
  useEffect(
    () => {
      const results = data.filter(({ displayName }) =>
        displayName.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
      checkValidation();
    },
    [searchTerm],
    [inputValues]
  );
  // const handleChange = (e) => {
  //   setSearchValue(e.target.value)
  //   if (!visible) {
  //     setVisible(true)
  //   }
  // }

  // useEffect(() => {
  //   const GetData = async () => {
  //     // const result = await axios("http://127.0.0.1:8000/usuario");
  //     // const result = await axios.get('https://localhost:7035/api/Assets', {
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     // })

  //     const valor = await fetch(`https://localhost:7035/api/Assets`).then((response) =>
  //       response.json(),
  //     )

  //     // const valor = JSON.stringify(result.data)
  //     // console.log(valor)
  //     console.log('HOLAS')
  //     console.log(valor)
  //     setValue1(JSON.stringify(valor))
  //   }
  //   GetData()
  // }, [])

  const selectItem = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item.id);
    setVisible(false);
  };

  const selectChange = (e) => {
    console.log(e.target.value);
  };

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  const onChange = (option) => {
    setValue1(option);
  };

  const onChange2 = (option) => {
    setValue2(option);
  };

  const filterOption = ({ label, value, data }, string) => {
    if (value1 === data) {
      return false;
    } else if (string) {
      return label.includes(string) || value.toString().includes(string);
    } else {
      return true;
    }
  };
  // const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value)
  // }
  // useEffect(() => {
  //   const results = data.filter((d) => d.toString().toLowerCase().includes(searchTerm))
  //   setSearchResults(results)
  // }, [searchTerm])

  // const [first, setfirst] = useState(null);

  // handle input change event

  // const customFilter = (option, inputValue) => {
  //   const nuevo = JSON.stringify(data)
  //   console.log(nuevo)
  //   return nuevo
  // }

  const [selectedValue, setSelectedValue] = useState(null);

  // const loadOptions = (inputValue) => {
  //   return axios(`https://localhost:7035/api/Assets=${inputValue}`).then((res) => res.json())
  // }

  // const printValue = async () => {
  //   const getCountries = await axios.get('https://localhost:7035/api/Assets', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   console.log(getCountries)
  //   return getCountries.data
  // }

  const OnChangeStartDate = (date) => {
    setStartDate(date.format());
    console.log(date.format());
  };

  const OnChangeEndDate = (date) => {
    setEndDate(date.format());
    console.log(date.format());
  };

  const OnInputChangeDriver = (event) => {
    // debugger;
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  // handle selection
  const OnChangeDriver = (event) => {
    //debugger;
    // var selectedOption = event.target.selectedOptions[0];
    // console.log(selectedOption.value); // 123
    // console.log(selectedOption.text); // TEXT
    // const {key}  = event.target;
    // const item = data.find(item => item.pegasusId === key);
    // const { value } = event.target;
    //const { key } = event.target.options.find(o => o.value === value);
    // const displayName = data.find(
    //   (obj) => obj.pegasusId === event.target.value
    // );

    // const toto = data.filter(
    //   (x) => parseInt(x.pegasusId) === parseInt(event.target.value)
    // );

    // console.log("toto");
    // console.log(toto[0].displayName);

    setSelectedValue(event.target.value);
    setSearchTerm(event.target.value);
    // setName(toto[0].displayName);

    // let idx = event.target.selectedIndex;
    // let dataset = event.target.options[idx].dataset;

    // var selectedIndex = event.target.options.selectedIndex;
    console.log(event.target.value);
  };

  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    console.log(d);
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("-");
  };

  const [inputValue, setValue] = useState("");

  const DriversSubmit = () => {
    console.log("Submit");
  };

  const [first, setfirst] = useState();
  const onSubmit = async (dataSubmit) => {
    setFinalScore({});

    const data = {
      startDate: convertDate(startDate),
      endDate: convertDate(endDate),
      id: selectedValue.pegasusId,
      //id: selectedValue,
    };
    console.log(data);
    const fecha = data;
    // console.log(fecha);
    const resultDrivers = await GetDrivers(data);

    // console.log(resultDrivers.data);

    //Driver Information
    setDriverInformation(resultDrivers.data.driverInformation);

    setTimeLapsInformation(resultDrivers.data.timeLapsInformation);

    //Seguridad
    setSecurityCurrentData(resultDrivers.data.securityCurrentData);
    setSecurityPrevData(resultDrivers.data.securityPrevData);

    //Motor
    setOperationCurrentData(resultDrivers.data.operationCurrentData);
    setOperationPrevData(resultDrivers.data.operationPrevData);

    //Calificación Final
    setFinalScore(resultDrivers.data.finalScore);

    setShowSecurity(true);

    console.log("values");
    setfirst(
      evaluate(
        resultDrivers.data.securityCurrentData,
        resultDrivers.data.securityPrevData
      )
    );
    // console.log(values);
    //console.log(data);
  };

  const GetDrivers = async (data) => {
    const thot = await GetAPIByID(ulrDrivers + "/id", data);
    // console.log(thot);
    return thot;
  };
  const convertDate = (str) => {
    console.log(str);
    // console.log(str);
    // var date = new Date(str),
    //   mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //   day = ("0" + date.getDate()).slice(-2);
    let date = str.split("/").reverse().join("-");

    return date;
    // return [date.getFullYear(), mnth, day].join("-");
  };
  const [state, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [driverInformation, setDriverInformation] = useState([]);
  const [timeLapsInformation, setTimeLapsInformation] = useState([]);
  const [showSecurity, setShowSecurity] = useState(false);
  const [securityCurrentData, setSecurityCurrentData] = useState([]);
  const [securityPrevData, setSecurityPrevData] = useState([]);

  const [operationCurrentData, setOperationCurrentData] = useState([]);
  const [operationPrevData, setOperationPrevData] = useState([]);

  const [finalScore, setFinalScore] = useState([]);

  const coomponentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => coomponentRef.current,
  });
  const ids = ["1"];
  const inputRef = useRef(null);
  const printDocument = () => {
    // const div1 = document.getElementById('div1')

    // const xPos = 10
    // const yPos = 10
    // const doc = new jsPDF('p', 'mm', 'a4')
    // const pageWidth = doc.internal.pageSize.getWidth() - (xPos * 2)

    // const margins = {
    //     top: 5,
    //     bottom: 0,
    // }

    // doc.fromHTML(div1, xPos, yPos, {
    //     'width': pageWidth,
    // }, function () {}, margins)

    // html2canvas(inputRef.current).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF({
    //     orientation: "p",
    //     unit: "pt",
    //     format: "a4",
    //   });
    //   const imgProps = pdf.getImageProperties(imgData);
    //   const pdfWidth = pdf.internal.pageSize.getWidth();
    //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    //   pdf.save("Reporte.pdf");
    // });

    // var HTML_Width = $("#canvas_div_pdf").width();
    // var HTML_Height = $("#canvas_div_pdf").height();
    // var top_left_margin = 15;
    // var PDF_Width = HTML_Width + top_left_margin * 2;
    // var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    // var canvas_image_width = HTML_Width;
    // var canvas_image_height = HTML_Height;

    // var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    // html2canvas($("#canvas_div_pdf")[0], { allowTaint: true }).then(function (
    //   canvas
    // ) {
    //   canvas.getContext("2d");

    //   console.log(canvas.height + "  " + canvas.width);

    //   var imgData = canvas.toDataURL("image/png");
    //   var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
    //   pdf.addImage(
    //     imgData,
    //     "PNG",
    //     top_left_margin,
    //     top_left_margin,
    //     canvas_image_width,
    //     canvas_image_height
    //   );

    // pdf.addPage();
    // for (var i = 1; i <= totalPDFPages; i++) {
    //   pdf.addPage(PDF_Width, PDF_Height);
    //   pdf.addImage(
    //     imgData,
    //     "PNG",
    //     top_left_margin,
    //     -(PDF_Height * i) + top_left_margin * 4,
    //     canvas_image_width,
    //     canvas_image_height
    //   );
    // }

    //pdf.save("Reporte.pdf");
    //});

    html2canvas($("#canvas_div_pdf")[0], { allowTaint: true }).then(function (
      canvas
    ) {
      var imgData = canvas.toDataURL("image/png");

      /*
      Here are the numbers (paper width and height) that I found to work. 
      It still creates a little overlap part between the pages, but good enough for me.
      if you can find an official number from jsPDF, use them.
      */
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF("p", "mm");
      var position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("filename" + ".pdf");
    });
  };

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  // const styles = StyleSheet.create({
  //   page: {
  //     backgroundColor: "#d11fb6",
  //     color: "white",
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //   },
  //   viewer: {
  //     width: window.innerWidth, //the pdf viewer will take up all of the width and height
  //     height: window.innerHeight,
  //   },
  // });

  const doc = new jsPDF("l", "mm", [1800, 1810]);
  const save = () => {
    // doc.canvas.height = 72 * 11;
    // doc.canvas.width = 72 * 8.5;
    doc.html(
      ReactDOMServer.renderToStaticMarkup(
        <TableSecurity
          current={securityCurrentData}
          previous={securityPrevData}
          driverInformation={driverInformation}
          timeLapsInformation={timeLapsInformation}
        />
      ),
      {
        margin: [40, 60, 40, 60],
        callback: () => {
          doc.save("myDocument.pdf");
        },
      }
    );
  };

  // const [selected, setSelected] = useState([]);

  // const CustomSelect = ({ options, value, multiple, disabled }) => {
  //   const [snapshot, valueProps, optionProps] = useSelect({
  //     options,
  //     value,
  //     multiple,
  //     disabled,
  //   });

  //   return (
  //     <div>
  //       <button {...valueProps}>{snapshot.displayValue}</button>
  //       {snapshot.focus && (
  //         <ul>
  //           {snapshot.options.map((option) => (
  //             <li key={option.value}>
  //               <button {...optionProps} value={option.value}>
  //                 {option.name}
  //               </button>
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //     </div>
  //   );
  // };

  // const [selected1, setSelected1] = useState([]);

  // const options1 = [
  //   { label: "Grapes", value: "grapes" },
  //   { label: "Mango", value: "mango" },
  //   { label: "Strawberry", value: "strawberry", disabled: true },
  // ];

  const createPDF = () => {
    var element = document.getElementById("canvas_div_pdf");
    var opt = {
      margin: [4, 10, 0, 10], //top, left, buttom, right
      filename: "Reporte.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "mm",
        format: [490, 380],
        orientation: "portrait",
      },
    };
    html2pdf().set(opt).from(element).save();
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState(null);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setSearchTerm(event.target.value);
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      selecT: {},
    },
  });
  const onSubmit1 = (data) => {
    data.preventDefault();
    console.log(data);
  };

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!inputValues.fSelect) {
      errors.fSelect = "First name is required";
    } else {
      errors.fSelect = "";
    }

    if (!inputValues.fechaInicial) {
      errors.fechaInicial = "Fecha Inicial is required";
    } else {
      errors.fechaInicial = "";
    }

    if (!inputValues.fechaFinal) {
      errors.fechaFinal = "Fecha Final is required";
    } else {
      errors.fechaFinal = "";
    }

    setValidation(errors);
  };

  // const evaluate = () => {
  //   console.log("evaluate");
  //   console.log(parseInt(securityCurrentData.securityScore));
  //   if (
  //     parseInt(securityCurrentData.securityScore) >
  //       parseInt(securityPrevData.securityScore) &&
  //     parseInt(securityCurrentData.harshAccel) >
  //       parseInt(securityPrevData.harshAccel) &&
  //     parseInt(securityCurrentData.harshBrake) >
  //       parseInt(securityPrevData.harshBrake) &&
  //     parseInt(securityCurrentData.aggrCurves) >
  //       parseInt(securityPrevData.aggrCurves)
  //   ) {
  //     return (
  //       <Form.Group as={Row}>
  //         <TableRecommendation />
  //       </Form.Group>
  //     );
  //   } else {
  //     return (
  //       <Form.Group as={Row} className="mb-5 mt-20">
  //         <TableRecommendation
  //           current={securityCurrentData}
  //           previous={securityPrevData}
  //         />
  //       </Form.Group>
  //     );
  //   }
  // };

  const evaluate = (securityCurrentData, securityPrevData) => {
    console.log("START evaluate");
    console.log(parseFloat(securityCurrentData.securityScore));
    console.log(parseInt(securityCurrentData.harshAccel));
    console.log(parseInt(securityCurrentData.harshBrake));
    console.log(parseInt(securityCurrentData.aggrCurves));
    console.log("FINISH evaluate");
    if (
      parseFloat(securityCurrentData.securityScore) >
      parseFloat(securityPrevData.securityScore)
    ) {
      return (
        <Form.Group as={Row} className="mb-5 mt-20">
          <TableRecommendation
            current={securityCurrentData}
            previous={securityPrevData}
          />
        </Form.Group>
      );
    } else if (
      parseInt(securityCurrentData.harshAccel) >
      parseInt(securityPrevData.harshAccel)
    ) {
      return (
        <Form.Group as={Row} className="mb-5 mt-20">
          <TableRecommendation
            current={securityCurrentData}
            previous={securityPrevData}
          />
        </Form.Group>
      );
    } else if (
      parseInt(securityCurrentData.harshBrake) >
      parseInt(securityPrevData.harshBrake)
    ) {
      return (
        <Form.Group as={Row} className="mb-5 mt-20">
          <TableRecommendation
            current={securityCurrentData}
            previous={securityPrevData}
          />
        </Form.Group>
      );
    } else if (
      parseInt(securityCurrentData.aggrCurves) >
      parseInt(securityPrevData.aggrCurves)
    ) {
      return (
        <Form.Group as={Row} className="mb-5 mt-20">
          <TableRecommendation
            current={securityCurrentData}
            previous={securityPrevData}
          />
        </Form.Group>
      );
    } else {
      return <></>;
    }

    // else {
    //   return (
    //     <Form.Group as={Row} className="mb-5 mt-20">
    //       <TableRecommendation
    //         current={securityCurrentData}
    //         previous={securityPrevData}
    //       />
    //     </Form.Group>
    //   );
    // }

    // else {
    //   return (
    //     <Form.Group as={Row} className="mb-5 mt-20">
    //       <TableRecommendation
    //         current={securityCurrentData}
    //         previous={securityPrevData}
    //       />
    //     </Form.Group>
    //   );
    // }

    // else {
    //   return (
    //     <Form.Group as={Row} className="mb-5 mt-20">
    //       <TableRecommendation
    //         current={securityCurrentData}
    //         previous={securityPrevData}
    //       />
    //     </Form.Group>
    //   );
    // }
  };

  const validatefECHAs = (values) => {
    const errors = {};

    if (!values.fechaInicial) {
      errors.fechaInicial = "Required";
    }

    if (!values.fechaFinal) {
      errors.fechaFinal = "Required";
    }

    return errors;
  };

  // const formik = useFormik({
  //   initialValues: {
  //     select: "",
  //     fechaInicial: "",
  //     fechaFinal: "",
  //   },
  //   validationSchema: Yup.object({
  //     fechaInicial: Yup.string().required(),
  //     fechaFinal: Yup.string().required(),
  //   }),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 1));
  //   },
  // });

  const testSchema = Yup.object().shape({
    select: Yup.string().required("Select Year"),
  });

  const OnChangeDriverAsync = (value) => {
    // const { name, value } = event.target;
    setSelectedValue(value);
    setInputValue({ ...inputValues, [name]: value });
    console.log(inputValues.fSelect);
    // validate();
    // console.log(value);
  };

  const OnInputChangeDriverAsync = (value) => {
    setValue(value);
    setInputValue({ ...inputValues, [name]: value });
    console.log(inputValues.fSelect);
    // console.log(value);
  };
  const selectedValueSelect = "Seleccione el conductor...";

  const initialState = { email: "", password: "", repeatPassword: "" };
  const validations = [
    ({ email }) => isRequired(email) || { email: "E-mail is required" },
    ({ password }) =>
      isRequired(password) || { password: "Password is required" },
    ({ password, repeatPassword }) =>
      isSame(password, repeatPassword) || {
        repeatPassword: "Passwords do not match",
      },
  ];
  // const { values, isValid, errors, changeHandler, submitHandler } = useForm(
  //   initialState,
  //   validations,
  //   onSignup
  // );

  function isRequired(value) {
    return value != null && value.trim().length > 0;
  }

  function isSame(value1, value2) {
    return value1 === value2;
  }

  function login() {
    console.log("No errors, submit callback called!");
  }

  // const { values, errors, handleChange1, handleSubmit1 } = useForm(
  //   login,
  //   validate
  // );

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    select: Yup.string().required("Select is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    dob: Yup.string().required("Date of Birth is required"),
    FechaInicial: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^((0[1-9]|[12][0-9]|3[01])(\/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(\/)(02))|((0[1-9]|[12][0-9]|3[0])(\/)(0[469]|11))(\/)\d{4}$/,
        "Date of Birth must be a valid date in the format YYYY-MM-DD"
      ),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  // const { register, handleSubmit, reset, formState } = useForm(formOptions);
  // const { register, handleSubmit, formState } = useForm();
  // const { errors } = formState;

  // const onSubmit2 = (data) => {
  //   console.log(data);
  // };
  // function onSubmit2(data) {
  //   // display form data on success
  //   alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  //   return false;
  // }

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
  });

  // const {inputs, handleInputChange, handleSubmit ,errors} = useForm({email:'',password:''},validate);

  return (
    <>
      {/* <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Form is validated! Submitting the form...");
        }}
      >
        {({ touched, errors, isSubmitting, values }) =>
          !isSubmitting ? (
            <div>
              <div className="row mb-5">
                <div className="col-lg-12 text-center">
                  <h1 className="mt-5">Login Form</h1>
                </div>
              </div>
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    autocomplete="off"
                    className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                  />

                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="mt-3">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Submit
                </button>
              </Form>
            </div>
          ) : (
            <div>
              <h1 className="p-3 mt-5">Form Submitted</h1>

              <div className="alert alert-success mt-3">
                Thank for your connecting with us. Here's what we got from you !
              </div>
              <ul className="list-group">
                <li className="list-group-item">Email: {values.email}</li>
                <li className="list-group-item">Password: {values.password}</li>
              </ul>
            </div>
          )
        }
      </Formik> */}

      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      
      <input type="submit" />
    </form> */}

      {/* <div className="card m-3">
        <h5 className="card-header">
          React Hook Form 7 - Form Validation Example
        </h5>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit2)}>
            <div className="form-row">
              <div className="form-group col">
                <label>Title</label>
                <select
                  name="title"
                  {...register("title")}
                  className={`form-control ${errors.title ? "is-invalid" : ""}`}
                >
                  <option value=""></option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                </select>
                <div className="invalid-feedback">{errors.title?.message}</div>
                <Select
                  className={`form-control ${
                    errors.select ? "is-invalid" : ""
                  }`}
                  name="select"
                  {...register("select")}
                  style={{ width: "70%", backgroundColor: "green" }}
                  placeholder="Seleccione el conductor a calificar"
                  options={data}
                  getOptionLabel={(e) => e.displayName}
                  getOptionValue={(e) => e.driverCode}
                  value={selectedValue}
                  onChange={OnChangeDriverAsync}
                  onInputChange={OnInputChangeDriverAsync}
                  // filterOption={customFilter}
                ></Select>
                <div className="invalid-feedback">{errors.select?.message}</div>
              </div>
              <div className="form-group col-5">
                <label>First Name</label>
                <input
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              </div>
              <div className="form-group col-5">
                <label>Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  {...register("lastName")}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label>Date of Birth</label>
                <input
                  name="dob"
                  type="date"
                  {...register("dob")}
                  className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.dob?.message}</div>
              </div>
              <div className="form-group col">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="form-group col">
                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              </div>
            </div>
            <div className="form-group form-check">
              <input
                name="acceptTerms"
                type="checkbox"
                {...register("acceptTerms")}
                id="acceptTerms"
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                Accept Terms & Conditions
              </label>
              <div className="invalid-feedback">
                {errors.acceptTerms?.message}
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-1">
                Register
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="btn btn-secondary"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div> */}

      {/* <div className="section is-fullheight">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <form onSubmit={handleSubmit1} noValidate>
                <div className="field">
                  <label className="label">Email Address</label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.email && "is-danger"}`}
                      type="email"
                      name="email"
                      onChange={handleChange1}
                      value={values.email || ""}
                      required
                    />
                    {errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className={`input ${errors.password && "is-danger"}`}
                      type="password"
                      name="password"
                      onChange={handleChange1}
                      value={values.password || ""}
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="button is-block is-info is-fullwidth"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      {/* <form>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form> */}
      {/* <form onSubmit={handleSubmit(onSubmit1)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
        <input type="submit" />
      </form> */}
      <Row>
        <Col>
          <div>
            {/* <ul>
            {results.map((item) => (
              <li> {item.displayName}</li>
            ))}
          </ul> */}
          </div>
          {/* <PDFViewer style={styles.viewer}>
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>
                  {showSecurity && (
                    <TableSecurity
                      current={securityCurrentData}
                      previous={securityPrevData}
                      driverInformation={driverInformation}
                      timeLapsInformation={timeLapsInformation}
                    />
                  )}
                </Text>
              </View>
              <View style={styles.section}>
                <Text>World</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer> */}
          {/* <div>
            <h1>Select Fruits</h1>
            <pre>{JSON.stringify(selected)}</pre>
            <MultiSelect
              options={data}
              value={selected1}
              onChange={setSelected1}
              labelledBy="Select"
            />
          </div> */}
          <Card lg="12">
            <CardBody>
              <Form>
                {/* <Form> */}
                <Row>
                  <Col sm="10" className="mb-5">
                    {/* <Form.Group as={Row} className="text-center"> */}
                    {/* <Input
                      type="text"
                      color="lightBlue"
                      size="regular"
                      outline={true}
                      placeholder="Buscar conductor"
                      // value={searchTerm}
                      onChange={OnChangeDriver}
                    /> */}
                    {/* </Form.Group> */}
                  </Col>
                </Row>
              </Form>
              <Form className="mb-5" onSubmit={onSubmit1}>
                <Form.Group as={Row} className="mb-5">
                  <div className="form-group col">
                    <Col sm="3">
                      <Form.Label className="font-light">
                        Seleccione el conductor a calificar:
                      </Form.Label>
                    </Col>
                    <div
                    // className={`form-control ${
                    //   errors.title ? "is-invalid" : ""
                    // }`}
                    // name="title"
                    // {...register("title")}
                    >
                      <Col sm="6">
                        <Select
                          // {...register("select", { required: true })}
                          style={{ width: "70%", backgroundColor: "green" }}
                          placeholder="Seleccione el conductor a calificar"
                          options={data}
                          getOptionLabel={(e) => e.name}
                          getOptionValue={(e) => e.driverCode}
                          value={inputValues.fSelect}
                          onChange={OnChangeDriverAsync}
                          onInputChange={OnInputChangeDriverAsync}
                          name="fSelect"
                          required
                          // name="selectDriver"
                          // filterOption={customFilter}
                        ></Select>
                        {validation.fSelect && <p>{validation.fSelect}</p>}
                        {validation.fSelect && console.log(validation)}
                      </Col>
                    </div>

                    {/* <select
                      name="select"
                      className="form-select font-light"
                      style={{ zIndex: 9999 }}
                      // placeholder="Seleccione el conductor a calificar"
                      //onChange={handleChange}
                      onChange={formik.OnChangeDriver}
                      //onInputChange={OnInputChangeDriver}
                    >
                      {results.map((item, key) => (
                        <option
                          selected={selectedValueSelect}
                          key={item.pegasusId}
                          value={item.pegasusId}
                        >
                          {item.displayName}
                        </option>
                      ))}
                    </select> */}
                  </div>
                </Form.Group>

                <Form.Group as={Row} className="mb-8 font-light">
                  <Form.Label column sm="3">
                    Rango de Fechas
                  </Form.Label>
                  <Col sm="3">
                    <Form.Group>
                      <div class="group">
                        {/* <Fechas
                          name="FechaInicial"
                          {...register("FechaInicial")}
                          className={`form-control ${
                            errors.FechaInicial ? "is-invalid" : ""
                          }`}
                          //name="fechaInicial"
                          date={startDate}
                          onChangeDate={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="font-light"
                          value={formik.values.fechaInicial}
                        /> */}
                        <div
                        // {...register("FechaInicial")}
                        // className={`form-control ${
                        //   errors.FechaInicial ? "is-invalid" : ""
                        // }`}
                        >
                          {/* <DatePicker
                           
                            minDate={new DateObject().subtract(3, "months")}
                            format="DD/MM/YYYY"
                            value={startDate}
                            weekDays={weekDays}
                            months={months}
                            onChange={OnChangeStartDate}
                            {...register("FechaInicial", { required: true })}
                            animations={[
                              opacity(),
                              transition({
                                from: 40,
                                transition:
                                  "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                              }),
                            ]}
                            render={
                              <InputIcon
                                className="text-center"
                                style={{
                                  fontSize: "15px",
                                  marginRight: "0.5rem",
                                  fontWeight: "bold",
                                }}
                                placeholder="dd/mm/yyyy"
                              />
                            }
                          ></DatePicker> */}
                        </div>
                        <div className="invalid-feedback"></div>
                        <Fechas
                          //  {...register("fechainicial", { required: true })}
                          name="fechaInicial"
                          date={startDate}
                          onChangeDate={OnChangeStartDate}
                          className="font-light"
                          required
                        />
                        <span className="font-light"></span>
                        <span class="bar"></span>
                        <div class="group">
                          <label>Fecha Inicial</label>
                        </div>
                        {/* {formik.errors.fechaInicial &&
                          formik.touched.fechaInicial && (
                            <p>{formik.errors.fechaInicial}</p>
                          )} */}
                      </div>
                      <div className="invalid-feedback">
                        {validation.fechaInicial && (
                          <p>{validation.fechaInicial}</p>
                        )}
                        {validation.fechaInicial && console.log(validation)}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col sm="3">
                    <Form.Group>
                      <div class="group">
                        <Fechas
                          // required="required"
                          name="fechaFinal"
                          date={endDate}
                          onChangeDate={OnChangeEndDate}
                          className="font-light"
                          required
                          // value={formik.values.fechaFinal}
                        />
                        <span className="font-light"></span>
                        <span class="bar"></span>
                        <div class="group">
                          <label>Fecha Final</label>
                        </div>
                        {/* {formik.errors.fechaFinal &&
                          formik.touched.fechaFinal && (
                            <p>{formik.errors.fechaFinal}</p>
                          )} */}
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
                  <Button
                    type="submit"
                    //onClick={onSubmit}
                    sx={{ position: "absolute", right: 16 }}
                  >
                    <SpeedDial
                      ariaLabel="SpeedDial basic example"
                      icon={<PlayArrowIcon />}
                    ></SpeedDial>
                  </Button>
                </Box>

                {/* <div className="mb5">
                <button
                  style={{
                    position: "absolute",
                    right: 20,
                    top: 5,
                  }}
                  onClick={printDocument}
                  className="btn"
                  color="primary"
                >
                  <span
                    className="bi bi-file-pdf"
                    style={{ fontSize: 25 }}
                  ></span>
                </button>
                <button onClick={printDocument}>Imprimir PDF</button>
              </div> */}
                {/* <Preview id={"jsx-template"}> */}

                {/* <div id="element-container"> */}
                <div id="canvas_div_pdf">
                  <Form>
                    {showSecurity && (
                      <TableSecurity
                        current={securityCurrentData}
                        previous={securityPrevData}
                        driverInformation={driverInformation}
                        timeLapsInformation={timeLapsInformation}
                      />
                    )}

                    {showSecurity && (
                      <TableEngine
                        current={operationCurrentData}
                        previous={operationPrevData}
                      />
                    )}
                    {showSecurity && (
                      <TableScore
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
                        <Form.Group as={Row}>
                          {showSecurity && (
                            <TableRPM
                              current={operationCurrentData.rpmEvents}
                            />
                          )}
                        </Form.Group>
                      </Col>
                      <Col sm="5">
                        <Form.Group as={Row}>
                          {showSecurity && (
                            <TablePedalEvents
                              current={operationCurrentData.pedalEvents}
                            />
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                  {/* 
                <Form>
                  <Form.Group className="mb-5 mr-1 ml-1">
                    {showSecurity && (
                      <ChartBar
                        securityCurrent={securityCurrentData}
                        securityPrev={securityPrevData}
                      />
                    )}
                  </Form.Group>
                </Form> */}
                  <Form>
                    <Row>
                      <Col sm="10">
                        {/* <Form.Group as={Row} className="mb-5 mt-20">
                        {showSecurity && (
                          <TableRecommendation
                            current={securityCurrentData}
                            previous={securityPrevData}
                          />
                        )}
                      </Form.Group> */}
                        {showSecurity && first}
                        {/* {showSecurity && first} */}
                      </Col>
                    </Row>
                  </Form>
                </div>
                {/* <button onClick={createPDF}>PDFF</button> */}
                {/* </div> */}
                {/* </Preview> */}
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Drivers;
