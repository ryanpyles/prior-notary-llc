import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/PNLLC-logo.svg';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NavBar = () => (
  <Nav>
    <Logo src={logo} alt="PNLLC Logo" />
    <NavLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/calendar">Calendar</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
    </NavLinks>
  </Nav>
);

export default NavBar;
