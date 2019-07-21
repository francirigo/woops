import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

import Button from '../Button';
import fonts from '../../style/fonts';

const { Title } = fonts;

const AppTitle = styled(Title)`
  display: inline-block;
  margin: 0 .5em;
  font-size: 3em;
  background: #0C77F9;
  background: -moz-linear-gradient(left, #0C77F9 0%, #DC0073 43%, #FCA311 63%, #FCA311 78%, #29BF12 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, #0C77F9), color-stop(43%, #DC0073), color-stop(63%, #FCA311), color-stop(78%, #FCA311), color-stop(100%, #29BF12));
  background: -webkit-linear-gradient(left, #0C77F9 0%, #DC0073 43%, #FCA311 63%, #FCA311 78%, #29BF12 100%);
  background: -o-linear-gradient(left, #0C77F9 0%, #DC0073 43%, #FCA311 63%, #FCA311 78%, #29BF12 100%);
  background: -ms-linear-gradient(left, #0C77F9 0%, #DC0073 43%, #FCA311 63%, #FCA311 78%, #29BF12 100%);
  background: linear-gradient(to right, #0C77F9 0%, #DC0073 43%, #FCA311 63%, rgba(252,163,17,1) 78%, #29BF12 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0c77f9', endColorstr='#29bf12', GradientType=1 );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const NavBarContainer = styled.div`

`

const Menu = styled.div` 
  display: inline-block;
  vertical-align: super;
`

const StyledLink = styled(Link)`
    color: ${props => props.theme.colors.textColor};
    text-decoration: none;
    padding: .2em .5em;
    &:hover{
      background: ${props => props.theme.colors.innerBackground};
      border-radius: 5px;
      border: 1px solid ${props => props.theme.colors.border};
    }
`

export default function NavBar({ theme, setTheme }) {
  return (
    <NavBarContainer>
      <AppTitle>Woops</AppTitle>
      <Menu>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/resize-drag-rotate">Play</StyledLink>
      </Menu>
      <Button
        content={`Activate ${theme ? 'dark' : 'light'} mode`}
        onClick={() => setTheme(!theme)}
      />
    </NavBarContainer>
  );
}
