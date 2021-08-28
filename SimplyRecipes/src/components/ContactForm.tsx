import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Form from './Form';

const useStyles = makeStyles(() => {
  return {
    root: {
      width: '100%',
      margin: 0,
    },
  };
});

const ContactForm: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form>
        <div className="form-row">
          <TextField
            type="text"
            name="name"
            id="name"
            label="Your name"
            variant="outlined"
            required
            fullWidth
          />
        </div>
        <div className="form-row">
          <TextField
            type="email"
            name="email"
            id="email"
            label="Your email"
            variant="outlined"
            required
            fullWidth
          />
        </div>
        <div className="form-row">
          <TextField
            multiline
            variant="outlined"
            name="message"
            id="message"
            label="Message"
            minRows="4"
            required
            fullWidth
          />
        </div>
        <Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
