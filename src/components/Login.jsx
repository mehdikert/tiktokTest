// src/components/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid ${props => props.theme.lightGrayColor};
  border-radius: 8px;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  color: ${props => props.theme.primaryColor};
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  width: 200px;
`;

const Button = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.whiteColor};
  border: none;
  border-radius: 4px;
`;

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        if (username.trim() !== '') {
            onLogin(username);
        }
    };

    return (
        <LoginContainer>
            <Heading>Login</Heading>
            <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
        </LoginContainer>
    );
};

export default Login;