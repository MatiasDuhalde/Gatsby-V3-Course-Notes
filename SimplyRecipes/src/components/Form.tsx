import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      width: '100%',
      background: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[4],
      padding: theme.spacing(8, 10),
      '& .form-row': {
        marginBottom: `${theme.spacing(4)}`,
      },
    },
  };
});

const Form: React.FC = props => {
  const classes = useStyles();

  return <form className={classes.root}>{props.children}</form>;
};

export default Form;
