import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

//Mui
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  useTheme,
  Icon
} from '@mui/material';
import { useGlobalContext } from '../../context';
import { Helmet } from 'react-helmet-async';
import { tokens } from '../../theme/themeConfig';

const Login = () => {
  const { state, handleState } = useGlobalContext();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>('abc@mail.com');
  const [password, setPassword] = React.useState<string>('12345');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //submit form
  const handleSubmit = () => {
    const tempState = { ...state, authInfo: { name: 'mahdi', email } };
    handleState(tempState);
    localStorage.setItem('token', 'ailfwroefjadsfularewroefajsdulfas');
    navigate('/dashboard/dashboardPage');
  };
  return (
    <>
      <Helmet>
        <title>Login Page | MKit</title>
      </Helmet>
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
      <Box display="flex">
        <Stack
          spacing={3}
          sx={{
            boxShadow: '1px 0 10px #ddd',
            flex: '1',
            display: { xs: 'none', md: 'flex' }
          }}
          justifyContent="center"
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: '700',
              textTransform: 'capitalize',
              fontSize: '2rem',
              paddingTop: '2rem'
            }}
            px={4}
          >
            hi, welcome back
          </Typography>
          <Box
            src="/assets/illustrations/illustration_login.png"
            alt="login-img"
            component="img"
          />
        </Stack>
        <Box
          justifyContent="center"
          display="flex"
          flexDirection="column"
          gap="1rem"
          height="100vh"
          sx={{
            padding: '2rem',
            flex: '1.5'
          }}
        >
          <Stack
            sx={{ width: { xs: '100%', lg: '60%' }, margin: '0 auto' }}
            spacing={3}
          >
            <Box mb={3}>
              <Typography
                component="h3"
                sx={{ fontWeight: '700', fontSize: '1.4rem' }}
              >
                Sign in to Minimal
              </Typography>
              <Typography variant="subtitle2">
                Don't have an account?
                <Box
                  component="a"
                  href="#"
                  ml={1}
                  sx={{
                    color: `${colors.info[500]}`,
                    textTransform: 'capitalize',
                    fontWeight: '500',
                    textDecoration: 'underline'
                  }}
                >
                  get start
                </Box>
              </Typography>
            </Box>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              name="password"
              label="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Box
                component="a"
                href="#"
                sx={{
                  textTransform: 'capitalize',
                  fontWeight: '500',
                  fontSize: '.9rem'
                }}
              >
                forgot password?
              </Box>
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Login;
