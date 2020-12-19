import React from "react";

import "./style.css";
const RadioForm = ({ data, onChange, selected }) => {
  return (
    <form className="formContainer">
      <p>{data.label}</p>
      <div className="roomOptionsDiv">
        {data.options.map((option, index) => (
          <div key={index.toString()}>
            <input
              checked={selected === option}
              onChange={(e) => onChange(e.currentTarget.value)}
              type="radio"
              name={data.label}
              value={option}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default RadioForm;
