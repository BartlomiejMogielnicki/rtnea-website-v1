import React from 'react';
import GlobalStyle from '../style/globalStyle';
import Header from '../components/molecules/Header/Header';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

export default Layout;
