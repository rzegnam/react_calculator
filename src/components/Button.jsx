import React from "react";
import "./button-style.css";

const Button = props => {
  function handleChange() {
    props.handleChange(props.name);
  }

  return (
    <div className="button">
      <button onClick={handleChange}>{props.name}</button>
    </div>
  );
};

export default Button;
