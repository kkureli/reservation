import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

const TopMenu = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState("/");

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  return (
    <div className="menuContainer">
      <div
        style={{ borderColor: currentLocation === "/" ? "orange" : "black" }}
      >
        <p>Tarih</p>
      </div>
      <div
        style={{
          borderColor:
            currentLocation === "/roomselection" ? "orange" : "black",
          borderLeftWidth: currentLocation === "/roomselection" ? 1 : 0,
          borderRightWidth: currentLocation === "/roomselection" ? 1 : 0,
        }}
      >
        <p>Oda</p>
      </div>
      <div
        style={{
          borderColor: currentLocation === "/payment" ? "orange" : "black",
        }}
      >
        <p>Ödeme</p>
      </div>
    </div>
  );
};

export default TopMenu;
