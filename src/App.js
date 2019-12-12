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
      if (buttonType === "revert-sign") {
        if (displayValue !== "") {
          setValue((parseFloat(displayValue) * -1).toString(10));
        }
      }
    }

    if (buttonType === "result") {
      setTotal(calculations[operation](total, displayValue));
      setValue("");
      setOperation("");
    }

    if (buttonType === "calculation") {
      if (total && displayValue) {
        setTotal(calculations[newValue](total, displayValue));
        setOperation(newValue);
        setValue("");
      } else if (!displayValue && !operation) {
        setOperation(newValue);
      } else {
        setOperation(newValue);
        setTotal(displayValue);
        setValue("");
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
