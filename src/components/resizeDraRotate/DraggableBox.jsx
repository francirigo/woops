import styled from "styled-components";
import React, { useState, useEffect } from "react";

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

export default function DraggableBox({ selectedColor }) {
  // const [position, setPosition] = useState({ x: 50, y: 50 });
  const [boxPositionX, setBoxPositionX] = useState(200);
  const [boxPositionY, setBoxPositionY] = useState(200);
  const [isDragging, toggleDragging] = useState(false);

  useEffect(() => {
    const setFromEvent = e => {
      window.addEventListener("dblclick", () => toggleDragging(false))
      console.log(e.keyCode, isDragging)
      if (isDragging) {
        console.log('so i am in')
        switch (e.keyCode) {
          case 39:
            //moving right
            if (boxPositionX < 375) {
              setBoxPositionX(boxPositionX + 3)
            }
            break
          case 37:
            //moving left
            if (boxPositionX > 25) {
              setBoxPositionX(boxPositionX - 3)
            }
            break
          case 38:
            //moving up
            if (boxPositionY > 25) {
              setBoxPositionY(boxPositionY - 3)
            }
            break
          case 40:
            //moving down
            if (boxPositionY < 375) {
              setBoxPositionY(boxPositionY + 3)
            }
            break
          default:
            return
        }
      }
      return []
    }
    window.addEventListener("keydown", setFromEvent);

    return () => {
      window.removeEventListener("keydown", setFromEvent);
    };
  }, [isDragging, boxPositionX, boxPositionY])
  return (
    <Container>
      <SizebleBox
        color={selectedColor}
        positionX={boxPositionX}
        positionY={boxPositionY}
        onClick={() => toggleDragging(true)}
      />
    </Container>
  );
}

// const setFromEvent = e => {
//   window.addEventListener("mouseup", () => toggleDragging(false));
//   if (isDragging) {

//     setPosition({ x: e.clientX, y: e.clientY });
//     console.log(e.clientX, 'position.x: ', position.x)
//     if (e.clientX > position.x) {

//       if (boxPositionX < 375) {
//         setBoxPositionX( boxPositionX + 1);
//       }
//     } else {
//       if (boxPositionX > 25) {
//         setBoxPositionX(boxPositionX - 1);
//       }
//     }
//     if (e.clientY > position.y) {
//       if (boxPositionY < 375) {
//         setBoxPositionY( boxPositionY + 1);
//       }
//     } else {
//       if (boxPositionY > 25) {
//         setBoxPositionY(boxPositionY - 1 );
//       }
//     }
//   }
//   return [];
// };

// window.addEventListener("mousemove", setFromEvent);
// if (!isDragging) {
//   window.removeEventListener("mousemove", setFromEvent);
// }
// return () => {
//   window.removeEventListener("mousemove", setFromEvent);
// };
// }, [isDragging, position, boxPositionX, boxPositionY]);
