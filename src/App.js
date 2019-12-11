import React, { useState } from 'react';
import CalculatorWindow from './components/CalculatorWindow'
import ButtonsPanel from './components/ButtonsPanel'
import './App.css';
import './components/CalculatorWindow-styles.css'


function App() {
  const [displayValue, setValue] = useState("123")

  function handleChange(newValue) {
    setValue(newValue)
  }

  return (
    <div className="App">
      <CalculatorWindow value={displayValue}/>
      <ButtonsPanel value={displayValue} handleChange={handleChange}/>
    </div>
  );
}

export default App;
