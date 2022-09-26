import React from 'react';

import { Navbar, Footer } from '../';

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
