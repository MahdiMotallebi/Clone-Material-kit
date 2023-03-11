import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';
import { useGlobalContext } from '../../context';

//MUI
import {
  Box,
  IconButton,
  List,
  ListItemText,
  Drawer,
  AppBar,
  Container,
  Toolbar,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Switch,
  Icon,
  useTheme,
  ListItem,
  alpha
} from '@mui/material';

//icons
import { BsFillSunFill, BsList, BsMoonFill, BsSearch } from 'react-icons/bs';

//components
import Dashboard from '../dashboard';
import Login from '../login';
import Products from '../products';
import User from '../user';
import Home from '../home';
import { tokens } from '../../theme/themeConfig';

const drawerWidth = '280px';

const SidebarLeft = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const location = useLocation();
  const { state, handleState } = useGlobalContext();
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const [Ltr, setLtr] = React.useState<boolean>(true);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLtr(e.target.checked);
    e.target.checked
      ? handleState({ ...state, dir: 'ltr' })
      : handleState({ ...state, dir: 'rtl' });
  };

  const handleThemeMode = () => {
    handleState({ ...state, mode: state.mode === 'dark' ? 'light' : 'dark' });
  };

  const menu = [
    {
      text: 'Dashboard',
      icon: '/assets/icons/navbar/ic_analytics.svg',
      path: '/dashboard'
    },
    { text: 'User', icon: '/assets/icons/navbar/ic_user.svg', path: '/user' },
    {
      text: 'Products',
      icon: '/assets/icons/navbar/ic_cart.svg',
      path: '/products'
    },
    { text: 'Login', icon: '/assets/icons/navbar/ic_lock.svg', path: '/login' },

    { text: 'Blog', icon: '/assets/icons/navbar/ic_blog.svg', path: '/blog' },
    {
      text: 'Not Found',
      icon: '/assets/icons/navbar/ic_disabled.svg',
      path: '/notfound'
    }
  ];

  const drawer = (
    <Box
      display="flex"
      flexDirection="column"
      gap="1rem"
      alignItems="flex-start"
      height=" 100vh"
      sx={{
        overflow: 'hidden',
        transition: '1s',
        '&:hover': {
          overflow: 'overlay'
        }
      }}
    >
      <Box width="100%" padding=" 1rem">
        <Icon sx={{ fontSize: '3rem', marginBottom: '1rem' }}>
          <img src="/assets/logo.svg" alt="logo" />
        </Icon>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap="1rem"
          padding=" 1rem"
          margin="0 auto"
          borderRadius="1rem"
          sx={{
            background: `${alpha(
              theme.palette.background[
                `${theme.palette.mode === 'light' ? 'default' : 'paper'}`
              ],
              1
            )}`
          }}
        >
          <Avatar alt="Remy Sharp" src="/img/user.jpg" />

          <Typography
            sx={{
              textTransform: 'capitalize',
              fontWeight: '700'
            }}
            variant="body1"
          >
            jaydon frankie
          </Typography>
        </Box>
      </Box>

      <List sx={{ padding: '1rem', width: '100%' }}>
        {menu.map(({ text, icon, path }) => {
          if (
            (text === 'Dashboard' && !localStorage.getItem('token')) ||
            (text === 'Login' && localStorage.getItem('token'))
          ) {
            return null;
          } else {
            return (
              <>
                <ListItem
                  button
                  component={Link}
                  to={path}
                  selected={path === location.pathname}
                  sx={{
                    display: 'flex',
                    gap: '1rem',
                    borderRadius: '.5rem',
                    selected: `${path === location.pathname}`
                  }}
                >
                  <Icon>
                    <img src={`${icon !== undefined && icon}`} alt="icon" />
                  </Icon>
                  <ListItemText primary={text} />
                </ListItem>
              </>
            );
          }
        })}
      </List>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        padding="2rem 0"
      >
        <Icon sx={{ fontSize: '6rem' }}>
          <img src="/assets/illustrations/illustration_avatar.png" alt="logo" />
        </Icon>

        <Typography
          sx={{
            textTransform: 'capitalize',
            fontWeight: '700',
            fonSize: '1.2rem'
          }}
        >
          get more?
        </Typography>
        <Typography
          sx={{
            '&::first-letter': {
              textTransform: 'capitalize'
            },
            fontWeight: '300',
            variant: 'body1',
            color: ` ${theme.palette.text.secondary}`
          }}
        >
          from only 69$
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        component="nav"
        sx={{
          width: { xl: drawerWidth },
          flexShrink: { xl: 0 },
          position: 'relative'
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
              background: `${alpha(
                theme.palette.background.default,
                theme.palette.mode === 'dark' ? 1 : 0.5
              )}`
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        width="100%"
        sx={{
          background: `${alpha(
            theme.palette.background.default,
            theme.palette.mode === 'dark' ? 1 : 0.5
          )}`
        }}
      >
        <AppBar
          position="sticky"
          color="transparent"
          sx={{
            backdropFilter: 'blur(5px)',
            height: '80px'
          }}
          elevation={0}
        >
          <Container
            maxWidth="xl"
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem'
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
              <Box>
                <IconButton
                  sx={{
                    fontSize: '1rem'
                  }}
                >
                  <BsSearch />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  sx={{
                    fontSize: '1rem'
                  }}
                  onClick={handleThemeMode}
                >
                  {theme.palette.mode === 'dark' ? (
                    <BsFillSunFill />
                  ) : (
                    <BsMoonFill />
                  )}
                </IconButton>
              </Box>
              <Box>
                <Box component="span" textTransform="uppercase">
                  ltr
                </Box>
                <Switch
                  checked={Ltr}
                  onChange={(e) => handleChange(e)}
                  value={Ltr}
                  color="primary"
                />
              </Box>
            </Box>

            {localStorage.getItem('token') && (
              <Toolbar disableGutters>
                <Box sx={{ marginLeft: 'auto' }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar alt="Remy Sharp" src="/img/user.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px', padding: '1rem' }}
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
                    <MenuItem
                      sx={{
                        borderBottom: '1px solid #ddd',
                        borderRaduis: '1rem'
                      }}
                    >
                      <Typography textAlign="center" sx={{ fontWeight: 700 }}>
                        {state.authInfo['email']}
                      </Typography>
                    </MenuItem>

                    <MenuItem>profile</MenuItem>
                    <MenuItem>account</MenuItem>
                    <MenuItem>setting</MenuItem>
                    <MenuItem onClick={handleLogout}>logout</MenuItem>
                  </Menu>
                </Box>
              </Toolbar>
            )}
          </Container>
        </AppBar>
        <Box p={3}>
          <Routes>
            <Route path="/" element={<Home />} />
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
