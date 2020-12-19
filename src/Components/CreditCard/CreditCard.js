import React from "react";
import Cards from "react-credit-cards";
import { connect } from "react-redux";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../../utils/utils";
import "./style.css";
import { setCardInformations } from "../../redux/actions";
const CreditCardComponent = ({ cardInformations, setCardInformations }) => {
  const handleInputFocus = (e) => {
    setCardInformations({ ...cardInformations, focus: e.target.name });
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }
    setCardInformations({ ...cardInformations, [target.name]: target.value });
  };

  const cardInputFields = [
    {
      type: "text",
      name: "name",
      placeholder: "Kart Üzerindeki İsim",
      maxLength: 25,
    },
    {
      type: "text",
      name: "number",
      placeholder: "Kart Numarası (49.., 51.., 36.., 37..)",
      maxLength: 19,
    },
    {
      type: "tel",
      name: "expiry",
      placeholder: "Son Kullanma Tarihi",
    },
    {
      type: "tel",
      name: "cvc",
      placeholder: "CVC",
      maxLength: 3,
    },
  ];

  return (
    <div id="PaymentForm">
      <Cards
        cvc={cardInformations.cvc}
        expiry={cardInformations.expiry}
        focused={cardInformations.focus}
        name={cardInformations.name}
        number={cardInformations.number}
      />
      <form>
        {cardInputFields.map((e) => {
          return (
            <input
              key={e.name}
              style={{
                display:
                  e.name === "name" || e.name === "cvc"
                    ? "block"
                    : "inline-block",
              }}
              maxLength={e.maxLength || null}
              required
              type={e.type}
              name={e.name}
              value={cardInformations[e.name]}
              placeholder={e.placeholder}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          );
        })}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cardInformations: state.cardInformations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardInformations: (data) => dispatch(setCardInformations(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCardComponent);
