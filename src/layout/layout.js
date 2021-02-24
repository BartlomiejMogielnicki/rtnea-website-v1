import React from 'react';

const Layout = ({ children }) => (
  <>
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

export default Layout;
