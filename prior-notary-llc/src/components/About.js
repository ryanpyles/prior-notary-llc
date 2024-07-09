import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
    background-color: white;
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #002855;
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    color: #333;
`;

const About = () => {
    return (
        <AboutSection id="about">
            <Container>
                <Heading>About Us</Heading>
                <Paragraph>Prior Notary LLC is dedicated to providing reliable and professional notary services. With years of experience, we ensure your documents are notarized accurately and efficiently.</Paragraph>
            </Container>
        </AboutSection>
    );
};

export default About;
