import React from "react";
import "./CalculatorKeys.css";

function CalculatorKeys(props) {
  return (
    <button className={`${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </button>
  );
}

export default CalculatorKeys;