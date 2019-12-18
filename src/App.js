import React, { useState } from "react";
import CalculatorWindow from "./components/CalculatorWindow";
import ButtonsPanel from "./components/ButtonsPanel";
import "./App.css";

const calculations = {
  "+": (a, b) => (parseFloat(a) + parseFloat(b)).toString(10),
  "-": (a, b) => (parseFloat(a) - parseFloat(b)).toString(10),
  "*": (a, b) => (parseFloat(a) * parseFloat(b)).toString(10),
  "/": (a, b) => (parseFloat(a) / parseFloat(b)).toString(10)
};

const App = () => {
  const [displayValue, setValue] = useState("");
  const [operation, setOperation] = useState("");
  const [total, setTotal] = useState("");

  function handleChange(newValue, buttonType) {
    if (buttonType === "numeric") {
      setValue(displayValue + newValue);
    }

    if (buttonType === "clear") {
      setValue("");
      setTotal("");
      setOperation("");
    }

    if (buttonType === "revert-sign") {
      if (displayValue !== "") {
        setValue((parseFloat(displayValue) * -1).toString(10));
      } else if (total !== "") {
        setTotal((parseFloat(total) * -1).toString(10));
      }
    }

    if (buttonType === "result") {
      if (operation) {
        setTotal(calculations[operation](total, displayValue));
        setValue("");
        setOperation("");
      }
    }

    if (buttonType === "calculation") {
      if (displayValue && operation && total) {
        setTotal(calculations[operation](total, displayValue));
        setOperation(newValue);
      } else if (total) {
        setOperation(newValue);
      } else {
        setTotal(displayValue);
        setOperation(newValue);
      }

      setValue("");
    }

    if (buttonType === "percent" && displayValue) {
      if (operation) {
        setValue(
          (
            parseFloat(calculations[operation](total, displayValue)) * 0.01
          ).toString(10)
        );
      } else {
        setValue((parseFloat(displayValue) * 0.01).toString(10));
      }
    }

    if (buttonType === "fun-button") {
      window.open("https://en.wikipedia.org/wiki/Calculator");
    }

    if (buttonType === "dot") {
      if (!displayValue.includes(".")) {
        setValue(displayValue + newValue);
      }
    }
  }

  return (
    <div className="App">
      <CalculatorWindow value={displayValue} total={total} />
      <ButtonsPanel value={displayValue} handleChange={handleChange} />
    </div>
  );
};

export default App;
