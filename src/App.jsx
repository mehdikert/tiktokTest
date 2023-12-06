// src/App.js
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import VideoList from './components/VideoList';
import Login from './components/Login';
import data from './data.json';
import { theme } from './theme';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  color: ${props => props.theme.primaryColor};
`;

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Heading>Welcome, {loggedInUser || 'Guest'}!</Heading>
        {loggedInUser ? <VideoList videos={data} /> : <Login onLogin={handleLogin} />}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;