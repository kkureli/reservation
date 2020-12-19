import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import "./style.css";
const SelectedDateInformation = ({ checkinDate, checkoutDate }) => {
  return (
    <div className="dateInformationDiv">
      <p>Check-in: {moment(checkinDate).format("DD-MM-YYYY")}</p>
      <p>Check-out: {moment(checkoutDate).format("DD-MM-YYYY")}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkinDate: state.checkinDate,
    checkoutDate: state.checkoutDate,
  };
};

export default connect(mapStateToProps, null)(SelectedDateInformation);
