import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: block;
  width: 50%;
  border: solid 1px;
`;

const Button = props => {
  function handleChange() {
    props.handleChange(props.name);
  }

  return <StyledButton onClick={handleChange}>{props.name}</StyledButton>;
};

export default Button;
