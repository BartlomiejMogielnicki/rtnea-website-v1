import React from 'react';
import GlobalStyle from '../style/globalStyle';
import Header from '../components/molecules/Header/Header';
import Footer from '../components/molecules/Footer/Footer';
import styled from 'styled-components';

const StyledMain = styled.main`
  min-height: calc(100vh - 80px);
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

export default Layout;
