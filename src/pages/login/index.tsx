import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

//Mui
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useGlobalContext } from '../../context';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { state, handleState } = useGlobalContext();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>('abc@mail.com');
  const [password, setPassword] = React.useState<string>('12345');

  //submit form
  const handleSubmit = () => {
    const tempState = { ...state, authInfo: { name: 'mahdi', email } };
    handleState(tempState);
    localStorage.setItem('token', 'ailfwroefjadsfularewroefajsdulfas');
    navigate('/dashboard');
  };
  return (
    <>
      <Helmet>
        <title>Login Page | MKit</title>
      </Helmet>

      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        gap="1rem"
        height="100vh"
        width="100%"
        sx={{
          width: { md: '75%' },
          margin: '0 auto'
        }}
      >
        <Typography component="h3" sx={{ fontWeight: '400', fontSize: '2rem' }}>
          Login page
        </Typography>
        <Stack
          sx={{
            width: '100%',
            gap: '1rem',
            background: '#fff',
            padding: '3rem',
            borderRadius: '1rem'
          }}
        >
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
          <FormControlLabel control={<Checkbox />} label="Remember me" />
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
    </>
  );
};

export default Login;
