import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'flex',
      height: theme.spacing(16),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.grey[900],
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
