import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Footer from './Footer';
import Navbar from './Navbar';
import theme from '../theme';

const useStyles = makeStyles(() => {
  return {
    root: {
      a: {
        textDecoration: 'none',
      },
    },
  };
});

const Layout: React.FC = props => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline classes={classes.root} />
      <Navbar />
      {props.children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
