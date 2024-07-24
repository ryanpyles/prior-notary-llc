import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Content = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    padding: 0 2rem;
`;

const Heading = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
`;

const Subheading = styled.p`
    font-size: 1.5rem;
`;

const Hero = () => {
    return (
        <HeroSection>
            <VideoBackground autoPlay muted loop>
                <source src="public/src/components/assets/hero.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </VideoBackground>
            <Content>
                <Heading>Welcome to Prior Notary LLC</Heading>
                <Subheading>Professional Notary Services</Subheading>
            </Content>
        </HeroSection>
    );
};

export default Hero;
