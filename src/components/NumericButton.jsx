import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: ${props => (props.name === "0" ? "50%" : "25%")};
  background-color: #f7f7ef;
  border: solid 1px;
`;

const Button = props => {
  function handleChange() {
    props.handleChange(props.name, props.buttonType);
  }

  return (
    <StyledButton onClick={handleChange} name={props.name}>
      {props.name}
    </StyledButton>
  );
};

export default Button;
