import React from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import RecipeReviewCard from './RecipeReviewCard';

const AppBackground = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={3}
      >
        <Grid item>
          <Toolbar />
        </Grid>
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </Grid>
    </div>
  );
}

export default AppBackground;