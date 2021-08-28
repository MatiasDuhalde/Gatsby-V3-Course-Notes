import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './Footer';
import Navbar from './Navbar';
import theme from '../theme';

const Layout: React.FC = props => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Navbar />
        {props.children}
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
