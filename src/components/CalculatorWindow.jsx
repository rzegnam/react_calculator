import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: #a6a1a0;
  text-align: right;
  height: 21vh;
  font-size: 15vmin;
`;

const CalculatorWindow = (props) => {
  return <Container>{props.value ? props.value : props.total}</Container>;
};

export default CalculatorWindow;
