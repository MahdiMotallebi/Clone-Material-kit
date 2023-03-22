import React from 'react';
import { Link, Outlet } from 'react-router-dom';

//mui
import { Box, Container, Icon } from '@mui/material';

const OtherLayout = () => {
  return (
    <Box height="100vh" py={3} position="relative">
      <Container>
        <Link to="/">
          <Icon
            sx={{
              fontSize: '3rem',
              marginBottom: '1rem',
              position: 'absolute',
              top: '2rem',
              left: '2rem'
            }}
          >
            <Box src="/assets/logo.svg" alt="logo" component="img" />
          </Icon>
        </Link>
        <Outlet />
      </Container>
    </Box>
  );
};

export default OtherLayout;
