import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: #002855;
    color: white;
    text-align: center;
    padding: 1rem 0;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <p>&copy; 2024 Prior Notary LLC. All rights reserved.</p>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
