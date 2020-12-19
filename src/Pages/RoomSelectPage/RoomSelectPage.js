import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import BackNextButton from "../../Components/BackNextButton/BackNextButton";
import ModalComponent from "../../Components/ModalComponent/ModalComponent";
import RadioForm from "../../Components/RadioForm/RadioForm";
import SelectedDateInformation from "../../Components/SelectedDateInformation/SelectedDateInformation";
import { setDate, setRoomType, setViewSelection } from "../../redux/actions";
import "./style.css";
const RoomSelectPage = ({
  setRoomType,
  setViewSelection,
  roomType,
  viewSelection,
  setDate,
}) => {
  const roomTypeSelectionData = {
    label: "Oda Tipi",
    options: ["Standart", "Deluxe", "Suit"],
  };
  const viewSelectionData = {
    label: "Manzara Seçimi",
    options: ["Deniz", "Kara"],
  };
  const [showModalWarning, setShowModalWarning] = useState(false);
  const [modalWarningText, setModalWarningText] = useState("");
  const history = useHistory();

  const getStorageData = () => {
    const room_type = localStorage.getItem("room_type");
    const view_selection = localStorage.getItem("view_selection");
    const checkin_date = localStorage.getItem("checkin_date");
    const checkout_date = localStorage.getItem("checkout_date");

    if (!checkin_date || !checkout_date) {
      alert("Lutfen once tarih bilgilerini doldurunuz");
      history.push("/");
    } else {
      setDate({ date: new Date(checkin_date), type: "checkin" });
      setDate({ date: new Date(checkout_date), type: "checkout" });
      if (room_type) {
        setRoomType(room_type);
      }
      if (view_selection) {
        setViewSelection(view_selection);
      }
    }
  };

  useEffect(() => {
    getStorageData();
  }, []);

  const goToPrevious = () => {
    history.push("/");
  };

  const goToNext = () => {
    if (roomType === "") {
      setModalWarningText("Oda Tipi Secin");
      setShowModalWarning(true);
    } else if (viewSelection === "") {
      setModalWarningText("Manzara Secin");
      setShowModalWarning(true);
    } else {
      history.push("/payment");
    }
  };

  return (
    <>
      <ModalComponent
        show={showModalWarning}
        setShow={setShowModalWarning}
        text={modalWarningText}
      />
      <SelectedDateInformation />
      <RadioForm
        selected={roomType}
        onChange={setRoomType}
        data={roomTypeSelectionData}
      />
      <RadioForm
        selected={viewSelection}
        onChange={setViewSelection}
        data={viewSelectionData}
      />
      <div className="backNextButtons">
        <BackNextButton onClick={goToPrevious} title="Geri" />
        <BackNextButton onClick={goToNext} title="İleri" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    roomType: state.roomType,
    viewSelection: state.viewSelection,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoomType: (data) => dispatch(setRoomType(data)),
    setViewSelection: (data) => dispatch(setViewSelection(data)),
    setDate: (data) => dispatch(setDate(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomSelectPage);
