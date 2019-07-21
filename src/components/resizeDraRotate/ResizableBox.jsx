import styled from "styled-components";
import React, { useState, useEffect } from "react";

import containers from '../../style/containers'

const { CenteredContainer, RoundedBox } = containers;

const SizebleBox = styled(RoundedBox)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.color};
  position: relative;
  top: calc(200px - ${props => props.size / 2}px);
  left: calc(200px - ${props => props.size / 2}px);
  cursor: nwse-resize;
`;

const Container = styled(CenteredContainer)`
  border: 1px solid  ${props => props.theme.colors.border};
  height: 400px;
  width: 400px;
  border-radius: 5px;
  background: ${props => props.theme.colors.innerBackground};
`;

function Box({ selectedColor }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [boxSize, setBoxSize] = useState(50);
  const [isDragging, toggleDragging] = useState(false);

  useEffect(() => {
    const setFromEvent = e => {
      window.addEventListener("mouseup", e => toggleDragging(false));
      if (isDragging) {
        setPosition({ x: e.clientX, y: e.clientY });

        if (e.clientX > position.x || e.clientY > position.y) {
          if (boxSize < 400) {
            setBoxSize(boxSize + 8);
          }
        } else {
          if (boxSize > 50) {
            setBoxSize(boxSize - 8);
          }
        }
      }
      return [];
    };

    window.addEventListener("mousemove", setFromEvent);
    if (!isDragging) {
      window.removeEventListener("mousemove", setFromEvent);
    }
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, [isDragging, position, boxSize]);

  return (
    <Container>
      <SizebleBox
        color={selectedColor}
        size={boxSize}
        onMouseDown={e => toggleDragging(true)}
      />
    </Container>
  );
}

export default Box;
