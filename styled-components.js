import styled from 'styled-components';

// Colors
export const colors = {
  primary: '#002855',
  secondary: '#ff7f50',
  white: '#fff',
  lightGray: '#f4f4f4',
  darkGray: '#333',
};

// Containers
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Buttons
export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? colors.primary : colors.secondary)};
  color: ${colors.white};
  font-size: 1rem;
  &:hover {
    background-color: ${(props) => (props.primary ? '#001f3f' : '#e06b45')};
  }
`;

// Headings
export const Heading = styled.h2`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

// Inputs
export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

// NavBar
export const NavBarContainer = styled.nav`
  background-color: ${colors.primary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.a`
  color: ${colors.white};
  font-size: 1.5rem;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: ${colors.secondary};
  }
`;
