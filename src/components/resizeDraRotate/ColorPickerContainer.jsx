import React, { useState } from "react";
import styled from "styled-components";

import containers from "../../style/containers";
import fonts from '../../style/fonts';

const { Title } = fonts;
const { CenteredContainer, RoundedBox } = containers;

const ColorBtn = styled(RoundedBox)`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: ${props => props.color};
  margin: 5px;
  cursor: pointer;
  box-shadow: ${props => (props.selected ? `0px 0px 5px 3px #98C4F9` : "none")};
`;

export default function ColorPickerContainer(props) {
  const colors = ["#0C77F9", "#DC0073", "#FCA311", "#29BF12", "#8414AD"];
  const [selectedColor, setSelectedColor] = useState("#0C77F9");

  return (
    <div>
      <Title>{props.title}</Title>
      <CenteredContainer>
        {colors.map(color => (
          <ColorBtn
            selected={color === selectedColor}
            key={`color-picker-${color}`}
            color={color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </CenteredContainer>
      {React.cloneElement(props.children, { selectedColor: selectedColor })}
    </div>
  );
}
