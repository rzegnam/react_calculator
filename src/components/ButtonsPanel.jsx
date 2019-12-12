import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
`;
const PanelRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 25%;
  background: #f7f7ef;
`;

const ButtonsPanel = props => {
  return (
    <Panel>
      <PanelRow>
        <Button name="%" />
        <Button name="AC" />
        <Button name="<-" />
        <Button name="/" />
      </PanelRow>
      <PanelRow>
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="x" />
      </PanelRow>
      <PanelRow>
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </PanelRow>
      <PanelRow>
        <Button name="1" />
        <Button name="2" handleChange={props.handleChange} />
        <Button name="3" />
        <Button name="+" />
      </PanelRow>
      <PanelRow>
        <Button name="+/-" />
        <Button name="0" handleChange={props.handleChange} />
        <Button name="." />
        <Button name="=" />
      </PanelRow>
    </Panel>
  );
};

export default ButtonsPanel;
