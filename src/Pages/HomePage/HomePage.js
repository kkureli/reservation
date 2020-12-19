import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import BackNextButton from "../../Components/BackNextButton/BackNextButton";
import DatePicker from "../../Components/DatePicker/DatePicker";
import ModalComponent from "../../Components/ModalComponent/ModalComponent";
import { setDate } from "../../redux/actions";
import "./style.css";

const HomePage = ({ checkinDate, checkoutDate, setDate }) => {
  const [showModalWarning, setShowModalWarning] = useState(false);
  const [modalWarningText, setModalWarningText] = useState("");
  const history = useHistory();

  const onClick = () => {
    if (checkinDate === "" || !checkinDate) {
      setModalWarningText("Checkin Tarihi Secin");
      setShowModalWarning(true);
    } else if (checkoutDate === "" || !checkoutDate) {
      setModalWarningText("Checkout Tarihi Secin");
      setShowModalWarning(true);
    } else {
      var Difference_In_Time = checkoutDate.getTime() - checkinDate.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      if (Difference_In_Days >= 0) {
        history.push("/roomselection");
      } else {
        setModalWarningText("Checkout Tarihi, Checkin Tarihinden önce olamaz");
        setShowModalWarning(true);
      }
    }
  };

  const getStorageData = () => {
    const checkin_date = localStorage.getItem("checkin_date");
    const checkout_date = localStorage.getItem("checkout_date");

    if (checkin_date) {
      setDate({ date: new Date(checkin_date), type: "checkin" });
    }
    if (checkout_date) {
      setDate({ date: new Date(checkout_date), type: "checkout" });
    }
  };

  useEffect(() => {
    getStorageData();
  }, []);

  return (
    <div className="homeContainer">
      <ModalComponent
        show={showModalWarning}
        setShow={setShowModalWarning}
        text={modalWarningText}
      />
      <DatePicker
        type="checkin"
        setDate={setDate}
        date={checkinDate}
        title="Check-in Tarihi"
      />
      <DatePicker
        minDate={checkinDate && checkinDate}
        type="checkout"
        setDate={setDate}
        date={checkoutDate}
        title="Check-out Tarihi"
      />
      <BackNextButton
        onClick={onClick}
        style={{ display: "flex", justifyContent: "flex-end" }}
        title="İleri"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkinDate: state.checkinDate,
    checkoutDate: state.checkoutDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDate: (data) => dispatch(setDate(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
