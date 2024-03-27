import React from "react";
import "./style.css"
import CalculatorKeys from "./CalculatorKeys";
import { useState,useEffect } from "react";



const Calculator= () => {
    const [prevNumber, setPrevNumber] = useState(0);
    const [nextNumber, setNextNumber] = useState("");
    const [operation, setOperation] = useState(null);
   ;
   
    useEffect(() => {}, [operation, nextNumber, prevNumber]);


    const CalculatorOperations = {
        "/": (firstValue, secondValue) => firstValue / secondValue,
        "*": (firstValue, secondValue) => firstValue * secondValue,
        "+": (firstValue, secondValue) => firstValue + secondValue,
        "-": (firstValue, secondValue) => firstValue - secondValue,
        "=": (firstValue, secondValue) => secondValue,
      };


    const percentage = () => {
        setNextNumber(parseFloat(nextNumber) / 100);
        if (prevNumber && nextNumber === "") {
          setPrevNumber(parseFloat(prevNumber) / 100);
        }
      };




    const applyOperation = () => {
        let temp = CalculatorOperations[operation](
          parseFloat(nextNumber),
          parseFloat(prevNumber)
        );
        setOperation(null);
        setNextNumber(String(temp));
        setPrevNumber(null);

      };

    const clearData = () => {
        setNextNumber("0");
        setPrevNumber(0);
      };

    const handleNumber = (number) =>{
            setNextNumber(nextNumber === "0" ? String(number) : nextNumber + number);
          };

    const changeSign = () => {
        setNextNumber(parseFloat(nextNumber) * -1);
    };

    const addDot = () => {
        if (!/\./.test(nextNumber)) {
          setNextNumber(nextNumber + ".");
        }}      






const handleOperation = (value) => {
    if (!isNaN(value)) {
              
    handleNumber(value);
    } else if (value in CalculatorOperations) {
        if (operation === null) {
            setOperation(value);
            setPrevNumber(nextNumber);
            setNextNumber("");
        } else if (operation) {
               
        setOperation(value);
              }
        if (prevNumber && operation && nextNumber) {
            applyOperation();
          }
        } else if (value === "c") {
            clearData();
        } else if (value === "\xB1") {
            changeSign();
        } else if (value === ".") {
            addDot();
        } else if (value === "%") {
            percentage();
            }
          };






  return(<div className="calculator">
  <div className="calculator-input">
    <div className="result">{nextNumber} </div>
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
