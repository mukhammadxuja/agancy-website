import React from 'react';

import { Navbar, Footer } from '../';
import CustomCursor  from '../CustomCursor/index'

const Layout = ({ children }) => {
  return (
    <div className=''>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
