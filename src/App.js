import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import RecipeReviewCard from './RecipeReviewCard';
import Grid from '@material-ui/core/Grid';
import Faker from 'faker';

const App = () => {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <RecipeReviewCard />
        <RecipeReviewCard />
        <RecipeReviewCard />
      </Grid>

    </div>
  );
}

export default App;
