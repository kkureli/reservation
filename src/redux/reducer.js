import * as actionTypes from "./actionTypes";
const initialState = {
  checkinDate: "",
  checkoutDate: "",
  roomType: "",
  viewSelection: "",
  cardInformations: { cvc: "", expiry: "", focus: "", name: "", number: "" },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_CHECKIN_DATE:
      return {
        ...state,
        checkinDate: action.payload.date,
      };
    case actionTypes.SAVE_CHECKOUT_DATE:
      return {
        ...state,
        checkoutDate: action.payload.date,
      };
    case actionTypes.SAVE_ROOM_TYPE:
      return {
        ...state,
        roomType: action.payload,
      };
    case actionTypes.SAVE_VIEW_SELECTION:
      return {
        ...state,
        viewSelection: action.payload,
      };
    case actionTypes.SAVE_CARD_INFORMATIONS:
      return {
        ...state,
        cardInformations: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
