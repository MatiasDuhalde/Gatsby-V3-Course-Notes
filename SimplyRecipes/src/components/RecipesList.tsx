import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ContentfulRecipe } from '../@types/recipes';
import RecipeCard from './RecipeCard';

export interface RecipesListProps {
  recipes: ContentfulRecipe[];
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      gap: theme.spacing(8, 4),
      paddingBottom: theme.spacing(12),
    },
  };
});

const RecipesList: React.FC<RecipesListProps> = ({ recipes = [] }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      {recipes.map((recipe: ContentfulRecipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Grid>
  );
};

export default RecipesList;
