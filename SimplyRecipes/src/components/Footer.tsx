import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      height: '4rem',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.grey[900],
      padding: theme.spacing(3),
      color: theme.palette.grey[200],
      '& h5': { marginBottom: 0 },
      '& p': { marginBottom: 0 },
      '& span, & a': { color: theme.palette.primary.light, textDecoration: 'none' },
    },
  };
});

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>. Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Typography>
    </footer>
  );
};

export default Footer;
