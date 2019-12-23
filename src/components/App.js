import React, { useState } from "react";
import CalculatorWindow from "./CalculatorWindow";
import ButtonsPanel from "./ButtonsPanel";
import styled from "@emotion/styled";
import calculate from "../logic/calculations";

const CalcApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

class App extends React.Component {
  state = {
    nextValue: "",
    operation: "",
    total: ""
  };

  handleChange = (clickedButton, buttonType) => {
    this.setState(calculate(this.state, buttonType, clickedButton));
  };

  render() {
    return (
      <CalcApp>
        <CalculatorWindow
          value={this.state.nextValue}
          total={this.state.total}
        />
        <ButtonsPanel
          value={this.state.nextValue}
          handleChange={this.handleChange}
        />
      </CalcApp>
    );
  }
}

export default App;
