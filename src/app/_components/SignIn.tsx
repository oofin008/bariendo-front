import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { SignInParams } from '@/core/domains/auth/firebaseAuthRepo';
import { AuthMachineContext } from '@/core/presentation/auth/authMachine';
import { redirect } from 'next/navigation';

export default function SignIn() {
  const [ state, send, service ] = React.useContext(AuthMachineContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const isRememberMe = new Boolean(data.get('remember')).valueOf();
    
    const signInParams: SignInParams = {
      email,
      password,
      isRememberMe,
    }
    try {
      send({type:'LOG_IN', data: { signInParams }});
    } catch (error) {
      console.error('login error: ', error);
    }
  };

  if (state.matches('loggedIn')) {
    redirect('/dashboard');
  }

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" align='left' width='100%'>
            Sign in
          </Typography>
          <Typography component="h2" variant='h6' color='text.secondary' align='left' width='100%'>
            Hi there! Nice to see you again
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant='standard'
              InputLabelProps={{ shrink: true, style: { color: 'tomato' } }}
              color='error'
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant='standard'
              color='error'
              InputLabelProps={{ shrink: true, style: { color: 'tomato' } }}
            />
            <FormControlLabel
              id="remember"
              name='remember'
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography variant='body1' color='text.secondary' align='center'>
              Haven't an account? {' '}
              <Link color='error.main' href='/signup'>Sign Up</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
  );
}