import React from 'react';
import { PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Theme, Typography, makeStyles } from '@material-ui/core';
import BasePage from '../components/BasePage';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'grid',
      gap: theme.spacing(8, 16),
      paddingBottom: theme.spacing(12),
      '& h2': {
        textTransform: 'none',
        fontWeight: 'bold',
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        height: '400px',
      },
    },
    hero: {
      height: '40vh',
      position: 'relative',
      marginBottom: theme.spacing(8),
    },
    heroContainer: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.shape.borderRadius,
      background: 'rgba(0, 0, 0, 0.4)',
      top: theme.spacing(0),
      left: theme.spacing(0),
      width: '100%',
      height: '100%',
    },
    heroText: {
      color: theme.palette.common.white,
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        '& h1': {
          fontSize: theme.spacing(16),
          marginBottom: theme.spacing(0),
        },
      },
    },
    heroImg: {
      height: '100%',
      borderRadius: theme.shape.borderRadius,
    },
  };
});

const IndexPage: React.FC<PageProps> = () => {
  const classes = useStyles();
  return (
    <BasePage>
      <header className={classes.hero}>
        <StaticImage
          src="../assets/images/main.jpg"
          alt="eggs"
          className={classes.heroImg}
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className={classes.heroContainer}>
          <div className={classes.heroText}>
            <Typography variant="h1">SimplyRecipes</Typography>
            <Typography variant="h4">No Fluff, Just Recipes</Typography>
          </div>
        </div>
      </header>
    </BasePage>
  );
};

export default IndexPage;
