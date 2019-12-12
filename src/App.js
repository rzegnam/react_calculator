import React, { useState } from "react";
import CalculatorWindow from "./components/CalculatorWindow";
import ButtonsPanel from "./components/ButtonsPanel";
import "./App.css";

const App = () => {
  const [displayValue, setValue] = useState("");
  const [operation, setOperation] = useState("");
  const [nextValue, setNextValue] = useState("");

  function handleChange(newValue, buttonType) {
    if (buttonType === "numeric") {
      setValue(newValue);
    }

    if (buttonType === "clear") {
      setValue("");
      setNextValue("");
      setOperation("");
    }

    if (buttonType === "revert-sign") {
      if (buttonType === "revert-sign") {
        if (displayValue !== "") {
          setValue((parseFloat(displayValue) * -1).toString(10));
        }
      }
    }

    if (buttonType === "sum") {
      setOperation("+");
    }

    if (buttonType === "result") {
      if (displayValue && nextValue) {
        setValue(displayValue + operation + nextValue);
      }
    }
  }

  return (
    <div className="App">
      <CalculatorWindow value={displayValue} nextValue={nextValue} />
      <ButtonsPanel value={displayValue} handleChange={handleChange} />
    </div>
  );
};

export default App;
