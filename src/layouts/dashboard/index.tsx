import React from 'react';
import { Outlet } from 'react-router-dom';

//mui
import { Box, Stack } from '@mui/material';
import Sidebar from '../../pages/global/sidebar';
import Header from '../../pages/global/header';
const DashboardLayout = () => {
  return (
    <Box display="flex" alignItems="center" height="100%">
      <Sidebar />
      <Stack component="main" width="100%">
        <Header />
        <Box p={4}>
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardLayout;
