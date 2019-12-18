import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 25%;
  border: solid 1px;
  font-weight: bold;
  background: orange;
`;

const Button = props => {
  function handleChange() {
    props.handleChange(props.name, props.buttonType);
  }

  return <StyledButton onClick={handleChange}>{props.name}</StyledButton>;
};

export default Button;
