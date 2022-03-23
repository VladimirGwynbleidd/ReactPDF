import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
import InputIcon from "react-multi-date-picker/components/input_icon";

const Fechas = ({ date, onChangeDate }) => {
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

  return (
    <>
      <DatePicker
        className="inputField"
        minDate={new DateObject().subtract(3, "months")}
        format="DD/MM/YYYY"
        value={date}
        weekDays={weekDays}
        months={months}
        onChange={onChangeDate}
        animations={[
          opacity(),
          transition({
            from: 40,
            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
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
      ></DatePicker>
    </>
  );
};

export default Fechas;
