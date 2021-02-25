import React from 'react';
import GlobalStyle from '../style/globalStyle';
import Header from '../components/molecules/Header/Header';
import Footer from '../components/molecules/Footer/Footer';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

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
  padding-top: 80px;
  min-height: 100vh;
  position: relative;
`;

const Layout = ({ children, backgroundImage }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <StyledBackground Tag="section" fluid={backgroundImage}>
          <StyledBackdrop />
          <StyledWrapper>{children}</StyledWrapper>
        </StyledBackground>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
