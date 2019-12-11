import React from 'react';
import Button from './Button'
import './buttons-panel.css'


function ButtonsPanel(props) {

    return (
    <div  className="panel">
        <div className="panel-line"> 
        <Button name="%"/>
        <Button name="AC"/>
        <Button name="<-"/>
        <Button name="/"/>
        </div>
        <div className="panel-line">
        <Button name="7"/>
        <Button name="8"/>
        <Button name="9"/>
        <Button name="x"/>
        </div>
        <div className="panel-line">
        <Button name="4"/>
        <Button name="5"/>
        <Button name="6"/>
        <Button name="-"/>
        </div>
        <div className="panel-line">
        <Button name="1"/>
        <Button name="2" handleChange={props.handleChange}/>
        <Button name="3"/>
        <Button name="+"/>
        </div>
        <div className="panel-line">
        <Button name="+/-"/>
        <Button name="0" handleChange={props.handleChange}/>
        <Button name="."/>
        <Button name="="/>
        </div>
    </div>
  );
}

export default ButtonsPanel;
