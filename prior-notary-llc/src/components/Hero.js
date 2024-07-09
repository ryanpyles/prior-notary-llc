import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
    background-color: #002855;
    color: white;
    text-align: center;
    padding: 4rem 0;
    background-image: url('../assets/background.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 40, 85, 0.6);
    }
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
`;

const Heading = styled.h2`
    margin: 0;
    font-size: 3rem;
`;

const Paragraph = styled.p`
    margin: 1rem 0;
    font-size: 1.5rem;
`;

const Button = styled.a`
    background-color: #ff7f50;
    color: white;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
    display: inline-block;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #e06b45;
    }
`;

const Hero = () => {
    return (
        <HeroSection id="home">
            <Container>
                <Heading>Welcome to Prior Notary LLC</Heading>
                <Paragraph>Your trusted partner for all notary services</Paragraph>
                <Button href="#appointment">Make an Appointment</Button>
            </Container>
        </HeroSection>
    );
};

export default Hero;
