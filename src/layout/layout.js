import React from 'react';
import GlobalStyle from '../style/globalStyle';
import Header from '../components/molecules/Header/Header';
import Footer from '../components/molecules/Footer/Footer';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const StyledBackground = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
`;

const StyledWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const Layout = ({ children, backgroundImage }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <StyledBackground Tag="section" fluid={backgroundImage}>
          <StyledWrapper>{children}</StyledWrapper>
        </StyledBackground>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
