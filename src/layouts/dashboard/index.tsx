import React from 'react';
import { Outlet } from 'react-router-dom';

//mui
import { Box } from '@mui/material';
import Sidebar from '../../pages/global/Sidebar';
const DashboardLayout = () => {
  return (
    <Box display="flex" alignItems="center">
      <Sidebar />
      <Box component="main" border="1px solid red" width="100%" height="100vh">
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
