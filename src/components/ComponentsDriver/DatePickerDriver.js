import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import InputMask from "react-input-mask";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Row } from "reactstrap";
import es from "date-fns/locale/es";

registerLocale("es", es);
const DatePickerDriver = () => {
  const [startDate, setStartDate] = useState(new Date());
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

  return (
    <div className="col-md-4">
      <Form.Group as={Row} controlId="doj">
        <Form.Label>Fecha Incial</Form.Label>
        <DatePicker
          locale="es"
          customInput={<InputMask type="text" mask="99/99/9999" />}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="input-group input-group-sm input-group-calender">
              <div className="input-group-prepend">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decreaseMonth();
                  }}
                  disabled={prevMonthButtonDisabled}
                  className="btn btn-outline-secondary"
                  type="button"
                >
                  {"<"}
                </button>
              </div>

              <input
                type="number"
                onChange={({ target: { value } }) => changeYear(value)}
                value={date.getFullYear()}
                className="form-control"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
              />
              <select
                className="form-control"
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="input-group-append">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increaseMonth();
                  }}
                  className="btn btn-outline-secondary"
                  disabled={nextMonthButtonDisabled}
                >
                  {">"}
                </button>
              </div>
            </div>
          )}
          //wrapperClassName={props.wrapperClassName}
          className="form-control"
          dateFormat="dd/MM/yyyy"
          minDate={false}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          //selected={props.selected}
          //onChange={props.onChange}
        />
      </Form.Group>
      <Form.Group as={Row} controlId="doj">
        <Form.Label>Fecha Final</Form.Label>
        <DatePicker
          customInput={<InputMask type="text" mask="99/99/9999" />}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="input-group input-group-sm input-group-calender">
              <div className="input-group-prepend">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decreaseMonth();
                  }}
                  disabled={prevMonthButtonDisabled}
                  className="btn btn-outline-secondary"
                  type="button"
                >
                  {"<"}
                </button>
              </div>

              <input
                type="number"
                onChange={({ target: { value } }) => changeYear(value)}
                value={date.getFullYear()}
                className="form-control"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
              />
              <select
                className="form-control"
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="input-group-append">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increaseMonth();
                  }}
                  className="btn btn-outline-secondary"
                  disabled={nextMonthButtonDisabled}
                >
                  {">"}
                </button>
              </div>
            </div>
          )}
          //wrapperClassName={props.wrapperClassName}
          className="form-control"
          dateFormat="dd/MM/yyyy"
          minDate={false}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          //selected={props.selected}
          //onChange={props.onChange}
        />
      </Form.Group>
    </div>
  );
};

export default DatePickerDriver;
