const isCardValid = (cardInformations) => {
  const { name, number, expiry, cvc } = cardInformations;
  if (name === "") {
    return { warningText: "Kart Uzerindeki Isim bos olmamali", isValid: false };
  } else if (number === "") {
    return { warningText: "Kartinizin numarasini yaziniz", isValid: false };
  } else if (number.length < 19) {
    return { warningText: "Kart numarasi 16 karakter olmali", isValid: false };
  } else if (expiry === "") {
    return {
      warningText: "Kartinizin son kullanim tarihini yaziniz",
      isValid: false,
    };
  } else if (expiry.length < 5) {
    return { warningText: "Son kullanim tarihi hatali", isValid: false };
  } else if (cvc === "") {
    return {
      warningText: "Kartinizin arkasindaki cvc kodunu yaziniz",
      isValid: false,
    };
  } else if (cvc.length < 3) {
    return { warningText: "CVC kodu 3 karakter olmali", isValid: false };
  } else {
    return { isValid: true };
  }
};

export default isCardValid;
