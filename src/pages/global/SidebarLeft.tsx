import React from 'react';
//MUI
import {
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer
} from '@mui/material';

//icons
import { BsFillPersonFill, BsList, BsFillBarChartFill } from 'react-icons/bs';
import Dashboard from '../dashboard';

const drawerWidth = '240px';
const SidebarLeft = () => {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <BsFillBarChartFill />
          </ListItemIcon>
          <ListItemText primary="dashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <BsFillPersonFill />
          </ListItemIcon>
          <ListItemText primary="user" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <Box display="flex">
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 }
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },

            '& .MuiDrawer-paper': {
              width: drawerWidth,
              borderRight: '1px dashed #ddd',
              background: '#f7f7f7'
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <IconButton
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <BsList />
      </IconButton>
      <Box component="main" p={3} width="100%">
        <Dashboard />
      </Box>
    </Box>
  );
};

export default SidebarLeft;
