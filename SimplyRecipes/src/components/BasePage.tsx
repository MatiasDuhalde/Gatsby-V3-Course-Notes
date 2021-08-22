import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import Layout from './Layout';

const useStyles = makeStyles((theme: Theme) => {
  console.log(theme);

  return {
    root: {
      width: '90vw',
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
      paddingTop: '2rem',
      minHeight: 'calc(100vh - (6rem + 4rem))',
    },
  };
});

const BasePage: React.FC = props => {
  const classes = useStyles();

  return (
    <Layout>
      <main className={classes.root}>{props.children}</main>
    </Layout>
  );
};

export default BasePage;
