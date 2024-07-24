import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  background-color: #002855;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #001f3f;
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <FormContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </FormContainer>
  );
};

export default Login;
