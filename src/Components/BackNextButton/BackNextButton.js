import React from "react";
import "./style.css";
const BackNextButton = ({ onClick, title, style }) => {
  return (
    <div style={{ ...style }} className="backNextbuttonDiv">
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default BackNextButton;
