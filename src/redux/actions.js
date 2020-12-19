import * as actionTypes from "./actionTypes";

export const setDate = (data) => (dispatch) => {
  if (data.type === "checkin") {
    dispatch({ type: actionTypes.SAVE_CHECKIN_DATE, payload: data });
    if (data.date === null) {
      localStorage.removeItem("checkin_date");
    } else {
      localStorage.setItem("checkin_date", data.date);
    }
  } else {
    dispatch({ type: actionTypes.SAVE_CHECKOUT_DATE, payload: data });
    if (data.date === null) {
      localStorage.removeItem("checkout_date");
    } else {
      localStorage.setItem("checkout_date", data.date);
    }
  }
};
export const setRoomType = (data) => (dispatch) => {
  dispatch({ type: actionTypes.SAVE_ROOM_TYPE, payload: data });
  localStorage.setItem("room_type", data);
};
export const setViewSelection = (data) => (dispatch) => {
  dispatch({ type: actionTypes.SAVE_VIEW_SELECTION, payload: data });
  localStorage.setItem("view_selection", data);
};
export const setCardInformations = (data) => (dispatch) => {
  dispatch({ type: actionTypes.SAVE_CARD_INFORMATIONS, payload: data });
  localStorage.setItem("card_informations", JSON.stringify(data));
};
