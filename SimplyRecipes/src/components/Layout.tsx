import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: React.FC = props => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
