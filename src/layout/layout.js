import React from 'react';
import GlobalStyle from '../style/globalStyle';
import Helmet from 'react-helmet';
import Header from '../components/molecules/Header/Header';
import Footer from '../components/molecules/Footer/Footer';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
