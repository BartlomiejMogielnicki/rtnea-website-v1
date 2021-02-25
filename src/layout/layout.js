import React from 'react';
import GlobalStyle from '../style/globalStyle';
import Header from '../components/molecules/Header/Header';
import Footer from '../components/molecules/Footer/Footer';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const StyledMain = styled.main`
  min-height: 100vh;
`;

const StyledBackground = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
`;

const StyledWrapper = styled.div`
  min-height: 100vh;
`;

const Layout = ({ children, backgroundImage }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>
        <StyledBackground Tag="section" fluid={backgroundImage}>
          <StyledWrapper>{children}</StyledWrapper>
        </StyledBackground>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
