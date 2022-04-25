import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterDiv>
            <p>Movie App@2022</p>
        </FooterDiv>
    );
};

export default Footer;


const FooterDiv=styled.div`
    display:flex;
    justify-content:center;
    position: fixed;
    bottom: 0;
    width: 100%;
`