import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 25%;
  background-color: orange;
  border: solid 1px;
`;

const Button = props => {
  function handleChange() {
    props.handleChange(props.name, props.buttonType);
  }

  return <StyledButton onClick={handleChange}>{props.name}</StyledButton>;
};

export default Button;
