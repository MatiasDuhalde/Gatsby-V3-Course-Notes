import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ContentfulRecipe } from '../@types/recipes';

export interface TagsListProps {
  recipes: ContentfulRecipe[];
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {},
  };
});

const TagsList: React.FC<TagsListProps> = ({ recipes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">TagsList</Typography>
    </div>
  );
};

export default TagsList;
