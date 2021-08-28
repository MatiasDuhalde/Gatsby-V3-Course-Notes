import React from 'react';
import { PageProps, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    aboutImg: {
      borderRadius: theme.shape.borderRadius,
      height: '500px',
      [theme.breakpoints.up('md')]: {
        height: '100%',
      },
    },
  };
});

const AboutPage: React.FC<PageProps> = () => {
  const classes = useStyles();
  return (
    <BasePage>
      <section className={classes.root}>
        <article>
          <Typography variant="h2" gutterBottom>
            I&#39;m baby coloring book poke taxidermy
          </Typography>
          <Typography variant="body1" gutterBottom>
            Taxidermy forage glossier letterpress heirloom before they sold out you probably
            haven&#39;t heard of them banh mi biodiesel chia.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.
          </Typography>
          <Link to="/contact">
            <Button variant="outlined">Contact</Button>
          </Link>
        </article>
        <StaticImage
          src="../assets/images/about.jpg"
          alt="Person pouring salt in bowl"
          className={classes.aboutImg}
          placeholder="blurred"
        />
      </section>
    </BasePage>
  );
};

export default AboutPage;
