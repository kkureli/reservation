import React from "react";
import { connect } from "react-redux";
import "./style.css";
const SelectedRoomInformation = ({ roomType, viewSelection }) => {
  return (
    <div className="roomInformationDiv">
      <p>Oda Tipi: {roomType}</p>
      <p>Manzara: {viewSelection}</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    roomType: state.roomType,
    viewSelection: state.viewSelection,
  };
};

export default connect(mapStateToProps, null)(SelectedRoomInformation);
