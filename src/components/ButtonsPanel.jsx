import React from "react";
import NumericButton from "./NumericButton";
import ActionButton from "./ActionButton";
import styled from "@emotion/styled";

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
`;
const PanelRow = styled.div`
  display: flex;
  height: 100vh;
`;

const ButtonsPanel = props => {
  return (
    <Panel>
      <PanelRow>
        <ActionButton
          name="%"
          handleChange={props.handleChange}
          buttonType="percent"
        />
        <ActionButton
          name="AC"
          handleChange={props.handleChange}
          buttonType="clear"
        />
        <ActionButton
          name="+/-"
          handleChange={props.handleChange}
          buttonType="revert-sign"
        />
        <ActionButton
          name="/"
          handleChange={props.handleChange}
          buttonType="calculation"
        />
      </PanelRow>
      <PanelRow>
        <NumericButton
          name="7"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <NumericButton
          name="8"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <NumericButton
          name="9"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <ActionButton
          name="*"
          handleChange={props.handleChange}
          buttonType="calculation"
        />
      </PanelRow>
      <PanelRow>
        <NumericButton
          name="4"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <NumericButton
          name="5"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <NumericButton
          name="6"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <ActionButton
          name="-"
          handleChange={props.handleChange}
          buttonType="calculation"
        />
      </PanelRow>
      <PanelRow>
        <NumericButton
          name="1"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <NumericButton
          name="2"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <NumericButton
          name="3"
          handleChange={props.handleChange}
          buttonType="numeric"
        />
        <ActionButton
          name="+"
          handleChange={props.handleChange}
          buttonType="calculation"
        />
      </PanelRow>
      <PanelRow>
        <NumericButton
          name="0"
          handleChange={props.handleChange}
          buttonType="numeric"
          wide={"yes"}
        />
        <NumericButton
          name="."
          handleChange={props.handleChange}
          buttonType="dot"
        />
        <ActionButton
          name="="
          handleChange={props.handleChange}
          buttonType="result"
        />
      </PanelRow>
    </Panel>
  );
};

export default ButtonsPanel;
