import React from "react";
import ReactToPrint from "react-to-print";

export const ExportPdfComponent = () => {
  return (
    <div>
      <h1>Export HTMl Table in PDF File</h1>

      <TableComponent ref={(response) => (this.componentRef = response)} />

      <ReactToPrint
        content={() => this.componentRef}
        trigger={() => (
          <button className="btn btn-primary">Print to PDF!</button>
        )}
      />
    </div>
  );
};
