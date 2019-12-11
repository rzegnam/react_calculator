import React from 'react';
import './CalculatorWindow-styles.css'


function CalculatorWindow(props) {
  return (
    <div>
      <div className="display">{props.value}</div>
    </div>
  );
}

export default CalculatorWindow;
