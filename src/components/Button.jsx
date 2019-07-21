import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  float: right;
  font-weight: 700;
  outline: 0;
  font-size: .8em;
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  margin: 0.5em;
  padding: .7em 1em;
  text-align: center;
  border-radius: 5px;
  color: ${props => props.theme.colors.textColor};
  border: 2px solid ${props => props.theme.colors.textColor};
  background-color: transparent;
`

export default function Button({ onClick, content }) {

  return (
    <StyledButton onClick={onClick} >{content}</StyledButton>
  );
}
