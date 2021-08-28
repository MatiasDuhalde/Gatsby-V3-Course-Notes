import React from 'react';
import { PageProps } from 'gatsby';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BasePage from '../components/BasePage';
import ContactForm from '../components/ContactForm';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'grid',
      gap: `${theme.spacing(8)} ${theme.spacing(12)}`,
      paddingBottom: theme.spacing(12),
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
      },
    },
    contactInfo: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    contactForm: {
      width: '100%',
      margin: 0,
    },
  };
});

const ContactPage: React.FC<PageProps> = () => {
  const classes = useStyles();

  return (
    <BasePage>
      <section className={classes.root}>
        <article className={classes.contactInfo}>
          <Typography variant="h3">Want To Get In Touch?</Typography>
          <Typography variant="body1">
            Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk
            intelligentsia edison bulb synth.
          </Typography>
          <Typography variant="body1">
            Cardigan prism bicycle rights put a bird on it deep v.
          </Typography>
          <Typography variant="body1">
            Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny
            pack bicycle rights cardigan poke.
          </Typography>
        </article>
        <article className={classes.contactForm}>
          <ContactForm />
        </article>
      </section>
    </BasePage>
  );
};

export default ContactPage;
