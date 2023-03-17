import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { tokens } from '../../theme/themeConfig';
import { useGlobalContext } from '../../context';

//MUI
import {
  Box,
  List,
  ListItemText,
  Drawer,
  Avatar,
  Typography,
  Icon,
  useTheme,
  ListItem,
  alpha
} from '@mui/material';

const drawerWidth = '280px';

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const { state, handleState } = useGlobalContext();
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menu = [
    {
      text: 'Dashboard',
      icon: '/assets/icons/navbar/ic_analytics.svg',
      path: 'dashboardPage'
    },
    {
      text: 'User',
      icon: '/assets/icons/navbar/ic_user.svg',
      path: 'user'
    },
    {
      text: 'Products',
      icon: '/assets/icons/navbar/ic_cart.svg',
      path: 'products'
    },
    { text: 'Login', icon: '/assets/icons/navbar/ic_lock.svg', path: '/login' },

    {
      text: 'Blog',
      icon: '/assets/icons/navbar/ic_blog.svg',
      path: 'blog'
    },
    {
      text: 'page 404',
      icon: '/assets/icons/navbar/ic_disabled.svg',
      path: '404'
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
        <Link to="/">
          <Icon sx={{ fontSize: '3rem', marginBottom: '1rem' }}>
            <Box src="/assets/logo.svg" alt="logo" component="img" />
          </Icon>
        </Link>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap="1rem"
          padding=" 1rem"
          margin="0 auto"
          borderRadius="1rem"
          sx={{
            background: `${
              theme.palette.mode === 'light'
                ? colors.grey['500']
                : theme.palette.background['paper']
            }`
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/avatars/avatar_default.jpg"
          />

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
            width: drawerWidth,
            borderRight: '1px dashed #ddd',
            background: `${alpha(theme.palette.background.default, 1)}`
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
  );
};

export default Sidebar;
