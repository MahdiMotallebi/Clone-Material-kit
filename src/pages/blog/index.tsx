import React from 'react';

//mui
import { Box, Grid } from '@mui/material';
import BlogPost from '../../components/blogPost';
const Blog = () => {
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
                <BlogPost index={i} />;
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Blog;
