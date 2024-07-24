import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    padding-left: 1.5rem;

    &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.accent};
        font-size: 1.5rem;
    }
`;

const Services = () => {
    return (
        <ServicesSection id="services">
            <Container>
                <Heading>Our Services</Heading>
                <List>
                    <ListItem>General Notary Services</ListItem>
                    <ListItem>Loan Signing Services</ListItem>
                    <ListItem>Remote Online Notarization</ListItem>
                </List>
            </Container>
        </ServicesSection>
    );
};

export default Services;
