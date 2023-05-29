import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles, Theme } from '@material-ui/core/styles';
import RecipesList from './RecipesList';
import TagsList from './TagsList';
import { ContentfulRecipe } from '../@types/recipes';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: 'grid',
      gap: theme.spacing(8, 4),
    },
  };
});

const query = graphql`
  {
    allContentfulRecipe(sort: { order: DESC, fields: createdAt }) {
      nodes {
        id
        title
        preparationTime
        cookTime
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

const AllRecipes: React.FC = () => {
  const classes = useStyles();
  const {
    allContentfulRecipe: { nodes },
  } = useStaticQuery(query);
  const recipes: ContentfulRecipe[] = nodes;

  return (
    <section className={classes.root}>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
