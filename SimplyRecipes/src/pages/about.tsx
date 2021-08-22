import React from 'react';
import { PageProps } from 'gatsby';
import { makeStyles, Theme } from '@material-ui/core';
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
        heigth: '400px',
      },
    },
    aboutImg: {
      borderRadius: theme.shape.borderRadius,
      height: '500px',
      [theme.breakpoints.up('md')]: {
        heigth: '100%',
      },
    },
  };
});

const AboutPage: React.FC<PageProps> = () => {
  const classes = useStyles();
  return <BasePage></BasePage>;
};

export default AboutPage;
