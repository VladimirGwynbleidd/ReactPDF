import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import CEMEX from "./../../components/imagesSecurity/cemex.png";
import html2canvas from "html2canvas";
import Example from "pages/DriverScore/Drivers/Example";
import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js";
const $ = require("jquery");
export const PDFGenerate = () => {
  const pdfGenerATE = async () => {
    // const unit = "pt";
    // const size = "A4"; // Use A1, A2, A3 or A4
    // const orientation = "landscape"; // portrait or landscape

    // const marginLeft = 40;
    // const doc = new jsPDF(orientation, unit, size);
    // doc.addImage(CEMEX, "PNG", 65, 20, 200, 120);
    // doc.setFontSize(8);
    // //doc.fromHTML("<div>JOmin</div>", 1, 1);
    // // const title = "Reporte";
    // const headers = [["NAME", "CODE"]];

    // // const body = await dataPDF.map((elt) => [elt.name, elt.code]);

    // let content = {
    //   startX: 50,
    //   startY: 100,
    //   head: headers,
    //   // body: body,
    // };

    // doc.text("", marginLeft, 40);
    // doc.autoTable(content);
    // doc.save("Reporte.pdf");
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("Reporte.pdf");
    });
  };

  const printDocumentPDF = () => {
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

    var HTML_Width = $("#canvas_div_pdf").width();
    var HTML_Height = $("#canvas_div_pdf").height();
    var top_left_margin = 30;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = PDF_Width * 2.5 + top_left_margin * 2;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#canvas_div_pdf")[0], { allowTaint: true }).then(function (
      canvas
    ) {
      canvas.getContext("2d");

      console.log(canvas.height + "  " + canvas.width);

      var imgData = canvas.toDataURL("image/png");
      var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "PNG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );

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

      pdf.save("Reporte.pdf");
    });
  };

  const ExportPDF = () => {
    // html2canvas(document.body, {
    //   onrendered: function (canvas) {
    //     var contentWidth = canvas.width;
    //     var contentHeight = canvas.height;

    //     //The height of the canvas which one pdf page can show;
    //     var pageHeight = (contentWidth / 592.28) * 841.89;
    //     //the height of canvas that haven't render to pdf
    //     var leftHeight = contentHeight;
    //     //addImage y-axial offset
    //     var position = 0;
    //     //a4 format [595.28,841.89]
    //     var imgWidth = 595.28;
    //     var imgHeight = (592.28 / contentWidth) * contentHeight;

    //     var pageData = canvas.toDataURL("image/jpeg", 1.0);

    //     var pdf = new jsPDF("", "pt", "a4");

    //     if (leftHeight < pageHeight) {
    //       pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
    //     } else {
    //       while (leftHeight > 0) {
    //         pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
    //         leftHeight -= pageHeight;
    //         position -= 841.89;
    //         //avoid blank page
    //         if (leftHeight > 0) {
    //           pdf.addPage();
    //         }
    //       }
    //     }

    //     pdf.save("content.pdf");
    //   },
    // });

   
    html2canvas($("#canvas_div_pdf")[0], { allowTaint: true }).then(function (
      canvas
    ) {
      var imgData = canvas.toDataURL('image/png');

      /*
      Here are the numbers (paper width and height) that I found to work. 
      It still creates a little overlap part between the pages, but good enough for me.
      if you can find an official number from jsPDF, use them.
      */
      
      const imgWidth = 190;
      const pageHeight = 270;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const doc = new jsPDF("pt", "mm");
      let position = 0;
      doc.addImage(imgData, "PNG", 10, 30, imgWidth, imgHeight + 90);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight + 120);
        heightLeft -= pageHeight;
      }
      doc.save("download.pdf");
    });
  };

  const doc = new jsPDF();
  const save = () => {
    doc.html(ReactDOMServer.renderToStaticMarkup(<Example />), {
      margin: [40, 60, 40, 60],
      callback: () => {
        doc.save("myDocument.pdf");
      },
    });
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
    <>
      {/* <div className="App">
        <div className="mb5">
          <button onClick={printDocument}>Print</button>
        </div>
        <div id="divToPrint" ref={inputRef}>
          HOLAS
        </div>
      </div> */}
      <div className="mb5">
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
          <span className="bi bi-file-pdf" style={{ fontSize: 25 }}></span>
        </button>
        {/* <button onClick={printDocumentPDF}>Imprimir PDF</button> */}
      </div>
      {/* <button
        style={{
          position: "absolute",
          right: 20,
          top: 5,
        }}
        onClick={pdfGenerATE}
        className="btn"
        color="primary"
      >
        <span className="bi bi-file-pdf" style={{ fontSize: 25 }}></span>
      </button> */}
    </>
  );
};
