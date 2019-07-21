import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import lightTheme from "./style/themes/light";
import darkTheme from "./style/themes/dark";

import Routes from './components/navbar/Routes';
import NavBar from './components/navbar/NavBar';

const MainContainer = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  font-family: ${props => props.theme.fontFamily}
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
`

function App() {
  const [theme, setTheme] = useState(false)
  return (
    <Router>
      <ThemeProvider theme={theme ? lightTheme : darkTheme} className="App">
        <MainContainer>
          <NavBar theme={theme} setTheme={setTheme} />
          <Routes />
        </MainContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
