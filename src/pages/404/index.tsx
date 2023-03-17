import React from 'react';
import { Helmet } from 'react-helmet-async';

//mui
import { Box, Stack, Typography } from '@mui/material';

const Page404 = () => {
  return (
    <>
      <Helmet>
        <title>Page 404 | Mkit</title>
      </Helmet>

      <Stack
        alignItems="center"
        gap="4rem"
        justifyContent="center"
        sx={{ height: '100%' }}
      >
        <Stack alignItems="center">
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: '1.8rem',
              mb: '1rem',
              fontWeight: '700',
              '&::first-letter': {
                textTransform: 'capitalize'
              }
            }}
            component="h3"
          >
            sorry, page not found!
          </Typography>

          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: '300',
              width: '50%',
              textAlign: 'center',
              '&::first-letter': {
                textTransform: 'capitalize'
              }
            }}
            variant="body2"
            component="h4"
          >
            sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>
        </Stack>
        <Box
          component="img"
          height="250px"
          src="assets/illustrations/illustration_404.svg"
          alt="page-not-found"
        />
      </Stack>
    </>
  );
};

export default Page404;
