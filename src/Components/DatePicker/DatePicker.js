import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./style.css";

const DatePickerComponent = ({ title, date, setDate, type, minDate }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="datePickerContainer">
      <div className="dateSelectRow">
        <p>{title}</p>
        <div className="dateIconInput">
          <DatePicker
            onClickOutside={() => setOpen(false)}
            onInputClick={() => setOpen(true)}
            open={open}
            onCalendarClose={() => setOpen(false)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Lütfen tarih seçin"
            minDate={minDate || new Date()}
            selected={date}
            onChange={(date) => setDate({ date, type })}
          />

          <div onClick={() => setOpen(true)} className="calendarIconContainer">
            <i className="fa fa-calendar"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerComponent;
