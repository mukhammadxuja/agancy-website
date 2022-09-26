import React from 'react';

import { Navbar, Footer } from '../';

const Layout = ({ children }) => {
  return (
    <div className='md:container md:mx-auto px-4'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
