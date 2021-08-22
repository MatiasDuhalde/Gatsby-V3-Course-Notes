import React from 'react';
import { PageProps } from 'gatsby';
import { makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      minHeight: `calc(100vh - (${theme.spacing(24)} + ${theme.spacing(16)}))`,
    },
    errorDisplay: {
      textAlign: 'center',
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(12),
      '& h1': {
        fontSize: `calc(${theme.typography.h1.fontSize} * 1.5)`,
      },
    },
  };
});

const Error404Page: React.FC<PageProps> = () => {
  const classes = useStyles();
  return (
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
  );
};

export default Error404Page;
