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
        <Button
          name="AC"
          handleChange={props.handleChange}
          buttonType="clear"
        />
        <Button name="TO DISCUSS" handleChange={props.handleChange} />
        <Button
          name="/"
          handleChange={props.handleChange}
          buttonType="calculation"
        />
      </PanelRow>
      <PanelRow>
        <Button
          name="7"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button
          name="8"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button
          name="9"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button
          name="*"
          handleChange={props.handleChange}
          buttonType="calculation"
        />
      </PanelRow>
      <PanelRow>
        <Button
          name="4"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button
          name="5"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button
          name="6"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button
          name="-"
          handleChange={props.handleChange}
          buttonType="calculation"
        />
      </PanelRow>
      <PanelRow>
        <Button
          name="1"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button
          name="2"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button
          name="3"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button
          name="+"
          handleChange={props.handleChange}
          buttonType="calculation"
        />
      </PanelRow>
      <PanelRow>
        <Button
          name="+/-"
          handleChange={props.handleChange}
          buttonType="revert-sign"
        />
        <Button
          name="0"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <Button name="." />
        <Button
          name="="
          handleChange={props.handleChange}
          buttonType="result"
        />
      </PanelRow>
    </Panel>
  );
};

export default ButtonsPanel;
