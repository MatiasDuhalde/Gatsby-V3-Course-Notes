import React from 'react';
import { PageProps } from 'gatsby';
import { makeStyles, Theme, Typography } from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {},
    errorDisplay: {
      textAlign: 'center',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      '& h1': {
        fontSize: `calc(${theme.typography.h1.fontSize} * 1.5)`,
      },
    },
  };
});

const Error404Page: React.FC<PageProps> = () => {
  const classes = useStyles();
  return (
    <Layout>
      <main className={classes.root}>
        <section className={classes.errorDisplay}>
          <Typography variant="h1" color="textPrimary" gutterBottom>
            404
          </Typography>
          <Typography variant="h3" color="textPrimary" gutterBottom>
            Page Not Found
          </Typography>
        </section>
      </main>
    </Layout>
  );
};

export default Error404Page;
