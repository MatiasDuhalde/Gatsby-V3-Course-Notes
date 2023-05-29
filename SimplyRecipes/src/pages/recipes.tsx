import React from 'react';
import { PageProps } from 'gatsby';
import BasePage from '../components/BasePage';
import AllRecipes from '../components/AllRecipes';

const RecipesPage: React.FC<PageProps> = () => {
  return (
    <BasePage>
      <h1>Recipes Page</h1>
      <AllRecipes />
    </BasePage>
  );
};

export default RecipesPage;
