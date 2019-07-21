import React from 'react';
import styled from "styled-components";

import ColorPickerContainer from './ColorPickerContainer';
import ResizableBox from './ResizableBox';
// import DraggableBox from './DraggableBox';
import RotateBox from './RotateBox';
import DraggableBoxV2 from './DraggableBoxV2';

const BoxesGrid = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: auto auto auto;
    margin: 1em;
`

function ResizeDraggRotateView() {
  return (
    <BoxesGrid>
      <ColorPickerContainer title='RESIZE ME'>
        <ResizableBox />
      </ColorPickerContainer >
      <ColorPickerContainer title='DRAGG ME'>
        <DraggableBoxV2 />
      </ColorPickerContainer >
      <ColorPickerContainer title='ROTATE ME'>
        <RotateBox />
      </ColorPickerContainer >
    </BoxesGrid>
  );
}

export default ResizeDraggRotateView;
