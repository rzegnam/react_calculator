import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 50%;
  border: solid 1px;
  font-size: 10vmin;
  background: ${props =>
    props.buttonType === "calculation" || props.buttonType === "result"
      ? "orange"
      : "#f7f7ef"};
`;

const Button = props => {
  function handleChange() {
    props.handleChange(props.name, props.buttonType);
  }

  return (
    <StyledButton onClick={handleChange} buttonType={props.buttonType}>
      {props.name}
    </StyledButton>
  );
};

export default Button;
