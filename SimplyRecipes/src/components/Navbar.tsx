import React from 'react';
import { Link } from 'gatsby';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, IconButton, makeStyles, Theme } from '@material-ui/core';
import logo from '../assets/images/logo.svg';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        height: theme.spacing(24),
      },
    },
    navCenter: {
      width: '90vw',
      maxWidth: theme.breakpoints.values.lg,
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    navHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: theme.spacing(24),
      '& img': {
        width: '200px',
        marginLeft: '-6px',
        marginBottom: '-9px',
      },
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0),
        marginRight: theme.spacing(8),
        height: 'auto',
      },
    },
    navBtn: {
      '& svg': {
        fontSize: theme.spacing(6),
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    navLinks: {
      height: theme.spacing(0),
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: theme.transitions.easing.easeInOut,
      [theme.breakpoints.up('md')]: {
        height: 'auto !important',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      },
    },
    showLinks: { height: theme.spacing(95.75) },
    navLink: {
      display: 'block',
      textAlign: 'center',
      fontSize: theme.spacing(6),
      textTransform: 'capitalize',
      color: theme.palette.grey[800],
      padding: theme.spacing(4, 0),
      borderTop: `1px solid ${theme.palette.grey[500]}`,
      transition: theme.transitions.easing.easeInOut,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0),
        borderTop: 'none',
        marginRight: theme.spacing(4),
      },
    },
    activeLink: {
      color: theme.palette.primary.main,
    },
    contactLink: {
      display: 'flex',
      justifyContent: 'center',
      '& a': {
        padding: theme.spacing(0.6, 4),
      },
      [theme.breakpoints.up('md')]: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: theme.spacing(0),
      },
    },
  };
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <div className={classes.navCenter}>
        <div className={classes.navHeader}>
          <Link to="/">
            <img src={logo} alt="SimplyRecipes" />
          </Link>
          <IconButton className={classes.navBtn} aria-label="open menu">
            <MenuIcon />
          </IconButton>
        </div>
        <div className={`${classes.navLinks} ${classes.showLinks}`}>
          <Link to="/" className={classes.navLink} activeClassName={classes.activeLink}>
            Home
          </Link>
          <Link to="/about" className={classes.navLink} activeClassName={classes.activeLink}>
            About
          </Link>
          <Link to="/tags" className={classes.navLink} activeClassName={classes.activeLink}>
            Tags
          </Link>
          <Link to="/recipes" className={classes.navLink} activeClassName={classes.activeLink}>
            Recipes
          </Link>
          <Link
            to="/contact"
            className={`${classes.navLink} ${classes.contactLink}`}
            activeClassName={classes.activeLink}
          >
            <Button variant="contained" color="primary">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
