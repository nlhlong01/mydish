import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from './RecipeReviewCard';
import posts from './data';

const useStyles = makeStyles(theme => ({
  grid: {
    maxWidth: 700
  }
}));

const BackgroundGrid = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      spacing={3}
    >
      {posts.map(post => {
        return (
          <Grid
          item xs={3}
          className={classes.grid}
          >
            <RecipeReviewCard post={post}></RecipeReviewCard>
          </Grid>
        )
      })}
    </Grid>
  );
}

export default BackgroundGrid;