import styled from "styled-components";
import React, { useState, useRef } from "react";

import containers from '../../style/containers'

const { CenteredContainer, RoundedBox } = containers;

const SizebleBox = styled(RoundedBox)`
  width: 50px;
  height: 50px;
  background-color: ${props => props.color};
  position: relative;
  top: calc(${props => props.positionY}px - 25px);
  left: calc(${props => props.positionX}px - 25px);
  cursor: all-scroll;
`;


const Container = styled(CenteredContainer)`
  border: 1px solid  ${props => props.theme.colors.border};
  height: 400px;
  width: 400px;
  border-radius: 5px;
  background: ${props => props.theme.colors.innerBackground};
`;

export default function DraggableBoxV2({ selectedColor }) {
  const [boxPositionX, setBoxPositionX] = useState(200);
  const [boxPositionY, setBoxPositionY] = useState(200);
  const [initialPosition, setInitialPosition] = useState({ x: 200, y: 200 })
  const containerRef = useRef()
  return (
    <Container
      onDragEnd={(e) => {
        const { offsetTop, offsetLeft } = containerRef.current
        if (e.clientY < (offsetTop + 50)) {
          // don't let box over upper border
          setBoxPositionY(25)
        } else {
          if (e.clientY > (offsetTop + 400)) {
            // don't let box over bottom border
            setBoxPositionY(375)
          } else {
            if (e.clientY !== initialPosition.y) {
              setBoxPositionY(e.clientY - offsetTop)
            }
          }
        }
        if (e.clientX < (offsetLeft)) {
          // don't let box over left border
          setBoxPositionX(25)
        } else {
          if (e.clientX > (offsetLeft + 400)) {
            // don't let box over right border
            setBoxPositionX(375)
          } else {
            if (e.clientX !== initialPosition.x) {
              setBoxPositionX(e.clientX - offsetLeft)
            }
          }
        }
      }}
      ref={containerRef}
    >
      <SizebleBox
        color={selectedColor}
        positionX={boxPositionX}
        positionY={boxPositionY}
        draggable
        onDragStart={e => setInitialPosition({ x: e.clientX, y: e.clientY })}
      />
    </Container>
  );
}
