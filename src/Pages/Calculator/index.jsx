import React from "react";
import "./style.css"
import CalculatorKeys from "./CalculatorKeys";
import { useState,useEffect } from "react";



const Calculator= () => {










  return(<div className="calculator">
  <div className="calculator-input">
    <div className="result">{result} </div>
  </div>
  <div className="calculator-keypad">
    <div className="keys-function">
      <CalculatorKeys keyValue={"c"} onClick={handleOperation} />
      <CalculatorKeys keyValue={"\xB1"} onClick={handleOperation} />
      <CalculatorKeys keyValue={"%"} onClick={handleOperation} />
    </div>
    <div className="keys-operators">
      <CalculatorKeys keyValue={"+"} onClick={handleOperation} />
      <CalculatorKeys keyValue={"-"} onClick={handleOperation} />
      <CalculatorKeys keyValue={"*"} onClick={handleOperation} />
      <CalculatorKeys keyValue={"/"} onClick={handleOperation} />
      <CalculatorKeys keyValue={"="} onClick={handleOperation} />
    </div>
    <div className="keys-numbers">
      <CalculatorKeys keyValue={9} onClick={handleOperation} />
      <CalculatorKeys keyValue={8} onClick={handleOperation} />
      <CalculatorKeys keyValue={7} onClick={handleOperation} />
      <CalculatorKeys keyValue={6} onClick={handleOperation} />
      <CalculatorKeys keyValue={5} onClick={handleOperation} />
      <CalculatorKeys keyValue={4} onClick={handleOperation} />
      <CalculatorKeys keyValue={3} onClick={handleOperation} />
      <CalculatorKeys keyValue={2} onClick={handleOperation} />
      <CalculatorKeys keyValue={1} onClick={handleOperation} />
      <CalculatorKeys
        className="key-dot"
        keyValue={"."}
        onClick={handleOperation}
      />
      <CalculatorKeys
        className="key-zero"
        keyValue={0}
        onClick={handleOperation}
      />
    </div>
  </div>
</div>
);
}


export default Calculator;
