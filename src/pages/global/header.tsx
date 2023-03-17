import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { tokens } from '../../theme/themeConfig';

//MUI
import {
  Box,
  IconButton,
  AppBar,
  Container,
  Toolbar,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Switch,
  useTheme,
  alpha
} from '@mui/material';

//icons
import { BsFillSunFill, BsList, BsMoonFill, BsSearch } from 'react-icons/bs';

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
  return (
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
          <Box display="flex" alignItems="center">
            <Typography
              component="span"
              textTransform="uppercase"
              sx={{ color: `${theme.palette.text.primary}` }}
            >
              ltr
            </Typography>
            <Switch
              checked={Ltr}
              onChange={(e) => handleChange(e)}
              value={Ltr}
              color="primary"
            />
          </Box>
        </Box>

        <Toolbar disableGutters>
          <Box sx={{ marginLeft: 'auto' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/images/avatars/avatar_default.jpg"
                />
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
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  minWidth: 150,
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: '1.5',
                  padding: '0 .5rem',
                  '& li': {
                    borderRadius: '.3rem',
                    textTransform: 'capitalize'
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
            >
              <MenuItem
                sx={{
                  borderBottom: '1px dashed #ddd',
                  borderRaduis: '1rem'
                }}
              >
                <Typography textAlign="center" sx={{ fontWeight: 700 }}>
                  {state.authInfo['email'] || 'abc@gmail.com'}
                </Typography>
              </MenuItem>

              <MenuItem>profile</MenuItem>
              <MenuItem>account</MenuItem>
              <MenuItem>setting</MenuItem>
              <MenuItem
                sx={{
                  borderTop: '1px dashed #ddd',
                  borderRaduis: '1rem'
                }}
                onClick={handleLogout}
              >
                logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
