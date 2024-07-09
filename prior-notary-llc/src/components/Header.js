import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderWrapper = styled.header`
    background-color: #002855;
    color: white;
    padding: 1rem 0;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 1.5rem;
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }
    
    li {
        margin-left: 2rem;
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s;
        
        &:hover {
            color: #ff7f50;
        }
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Title>Prior Notary LLC</Title>
                <Nav>
                    <ul>
                        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
                        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                </Nav>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
