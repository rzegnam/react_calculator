import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  color: black;
  background: #f0efef;
  height: 25vh;
  text-align: right;
  font-size: 15vmin;
`;

const CalculatorWindow = props => {
  return (
    <div>
      <Container>{props.nextValue ? props.nextValue : props.value}</Container>
    </div>
  );
};

export default CalculatorWindow;
