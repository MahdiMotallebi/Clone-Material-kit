import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';

//MUI
import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Drawer,
  AppBar,
  Container,
  Toolbar,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';

//icons
import {
  BsFillPersonFill,
  BsList,
  BsFillBarChartFill,
  BsPersonPlusFill,
  BsBasket3Fill
} from 'react-icons/bs';

//components
import Dashboard from '../dashboard';
import Login from '../login';
import { useGlobalContext } from '../../context';
import Home from '../user';
import Products from '../products';
import User from '../user';

const drawerWidth = '240px';

const SidebarLeft = () => {
  const navigate = useNavigate();
  const { state } = useGlobalContext();
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    handleCloseUserMenu();
    navigate('/login');
  };

  const menu = [
    { text: 'Dashboard', icon: <BsFillBarChartFill />, path: '/dashboard' },
    { text: 'User', icon: <BsFillPersonFill />, path: '/user' },
    { text: 'Products', icon: <BsBasket3Fill />, path: '/products' },
    { text: 'Login', icon: <BsPersonPlusFill />, path: '/login' }
  ];

  const drawer = (
    <List sx={{ padding: '1rem' }}>
      {menu.map(({ text, icon, path }) => {
        if (
          (text === 'Dashboard' && !localStorage.getItem('token')) ||
          (text === 'Login' && localStorage.getItem('token'))
        ) {
          return null;
        } else {
          return (
            <>
              <Link to={path} style={{ color: 'grey', textDecoration: 'none' }}>
                <ListItemButton
                  sx={{
                    display: 'flex',
                    gap: '1rem',
                    borderRadius: '.5rem'
                  }}
                >
                  {icon}
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </>
          );
        }
      })}
    </List>
  );

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        component="nav"
        sx={{
          width: { xl: drawerWidth },
          flexShrink: { xl: 0 }
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
            display: { xs: 'block', xl: 'none' },
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
            display: { xs: 'none', xl: 'block' },

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

      <Box component="main" width="100%">
        <AppBar
          position="sticky"
          color="transparent"
          sx={{ backdropFilter: 'blur(5px)' }}
          elevation={0}
        >
          <Container
            maxWidth="xl"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { xl: 'none' },
                fontSize: '1.6rem'
              }}
            >
              <BsList />
            </IconButton>
            {localStorage.getItem('token') && (
              <Toolbar disableGutters>
                <Box>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar alt="Remy Sharp" src="/img/user.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem sx={{ borderBottom: '1px solid #ddd' }}>
                      <Typography textAlign="center" sx={{ fontWeight: 700 }}>
                        {state.authInfo['email']}
                      </Typography>
                    </MenuItem>

                    <MenuItem>
                      <Typography textAlign="center">profile</Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography textAlign="center">account</Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography textAlign="center">setting</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center">logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </Toolbar>
            )}
          </Container>
        </AppBar>
        <Box p={5}>
          <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarLeft;
