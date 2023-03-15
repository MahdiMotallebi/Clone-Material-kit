import { Box, Grid } from '@mui/material';
import React from 'react';
import CardProduct from '../../components/cardProduct';

const Products = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        spacing={2}
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
        }}
      >
        {Array(10)
          .fill(0)
          .map((_, i) => {
            return (
              <Grid item>
                <CardProduct index={i} />;
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Products;
