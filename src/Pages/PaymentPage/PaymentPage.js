import React, { useEffect, useState } from "react";
import SelectedDateInformation from "../../Components/SelectedDateInformation/SelectedDateInformation";
import SelectedRoomInformation from "../../Components/SelectedRoomInformation/SelectedRoomInformation";
import CreditCardComponent from "../../Components/CreditCard/CreditCard";
import BackNextButton from "../../Components/BackNextButton/BackNextButton";
import { useHistory } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import {
  setCardInformations,
  setDate,
  setRoomType,
  setViewSelection,
} from "../../redux/actions";
import ModalComponent from "../../Components/ModalComponent/ModalComponent";
const PaymentPage = ({
  cardInformations,
  setCardInformations,
  setRoomType,
  setViewSelection,
  setDate,
  roomType,
  viewSelection,
  checkinDate,
  checkoutDate,
}) => {
  const [showModalWarning, setShowModalWarning] = useState(false);
  const [modalWarningText, setModalWarningText] = useState("");
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  const goBack = () => history.push("/roomselection");

  const paymentButtonPressed = () => {
    const { name, number, expiry, cvc } = cardInformations;
    if (name === "") {
      setModalWarningText("Kart Uzerindeki Isim bos olmamali");
      setShowModalWarning(true);
      setSuccess(false);
    } else if (number === "") {
      setModalWarningText("Kartinizin numarasini yaziniz");
      setShowModalWarning(true);
      setSuccess(false);
    } else if (number.length < 16) {
      setModalWarningText("Kart numarasi 16 karakter olmali");
      setShowModalWarning(true);
      setSuccess(false);
    } else if (expiry === "") {
      setModalWarningText("Kartinizin son kullanim tarihini yaziniz");
      setShowModalWarning(true);
      setSuccess(false);
    } else if (cvc === "") {
      setModalWarningText("Kartinizin arkasindaki cvc kodunu yaziniz");
      setShowModalWarning(true);
      setSuccess(false);
    } else if (cvc.length < 3) {
      setModalWarningText("CVC kodu 3 karakter olmali");
      setShowModalWarning(true);
      setSuccess(false);
    } else {
      setModalWarningText("Rezervasyonunuz basari ile tamamlanmistir!");
      setSuccess(true);
      setShowModalWarning(true);
      console.log({
        checkinDate,
        checkoutDate,
        roomType,
        viewSelection,
        cardInformations,
      });
    }
  };

  const getStorageData = () => {
    const items = { ...localStorage };
    const {
      room_type,
      view_selection,
      checkin_date,
      checkout_date,
      card_informations,
    } = items;
    if (view_selection && checkin_date && room_type && checkout_date) {
      setDate({ date: new Date(checkin_date), type: "checkin" });
      setDate({ date: new Date(checkout_date), type: "checkout" });
      setRoomType(room_type);
      setViewSelection(view_selection);
      if (card_informations) {
        const cardInformationsParsed = JSON.parse(card_informations);
        setCardInformations(cardInformationsParsed);
      }
    } else {
      history.push("/roomselection");
    }
  };

  useEffect(() => {
    getStorageData();
  }, []);

  return (
    <>
      <ModalComponent
        success={success}
        show={showModalWarning}
        setShow={setShowModalWarning}
        text={modalWarningText}
      />
      <SelectedDateInformation />
      <SelectedRoomInformation />
      <CreditCardComponent />
      <div className="backPayButtons">
        <BackNextButton onClick={goBack} title="Geri" />
        <BackNextButton onClick={paymentButtonPressed} title="Ödeme Yap" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cardInformations: state.cardInformations,
    roomType: state.roomType,
    viewSelection: state.viewSelection,
    checkinDate: state.checkinDate,
    checkoutDate: state.checkoutDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardInformations: (data) => dispatch(setCardInformations(data)),
    setRoomType: (data) => dispatch(setRoomType(data)),
    setViewSelection: (data) => dispatch(setViewSelection(data)),
    setDate: (data) => dispatch(setDate(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);
