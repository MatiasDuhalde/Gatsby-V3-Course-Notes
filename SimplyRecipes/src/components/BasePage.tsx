import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      width: '90vw',
      maxWidth: theme.breakpoints.values.lg,
      margin: theme.spacing(0, 'auto'),
      paddingTop: theme.spacing(8),
      minHeight: `calc(100vh - (${theme.spacing(24)} + ${theme.spacing(16)}))`,
    },
  };
});

const BasePage: React.FC = props => {
  const classes = useStyles();

  return <main className={classes.root}>{props.children}</main>;
};

export default BasePage;
