import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const StyledBackground = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  position: relative;
`;

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding-top: 80px;
  min-height: 100vh;
  max-width: 800px;
  width: 90%;
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hero = ({ backgroundImage, children }) => (
  <StyledBackground Tag="section" fluid={backgroundImage}>
    <StyledBackdrop />
    <StyledWrapper>{children}</StyledWrapper>
  </StyledBackground>
);

export default Hero;
