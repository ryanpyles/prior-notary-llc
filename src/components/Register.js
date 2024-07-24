import React from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RegisterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Register = () => (
  <RegisterContainer>
    <RegisterTitle>Register</RegisterTitle>
    <RegisterForm>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <TextArea placeholder="Message" rows="4" />
      <Button type="submit">Submit</Button>
    </RegisterForm>
  </RegisterContainer>
);

export default Register;
