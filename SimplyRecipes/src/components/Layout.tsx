import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Footer from './Footer';
import Navbar from './Navbar';
import theme from '../theme';
import { CssBaseline } from '@material-ui/core';

const Layout: React.FC = props => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {props.children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
