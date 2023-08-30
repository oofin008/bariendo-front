import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const PdpaLabel = () => {
  return (
    <Typography>
      I agree to the <Link href="#">Term of Services</Link> and <Link href="#">Privacy Policy</Link> {' .'}
    </Typography>
  )
}

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant='standard'
              InputLabelProps={{ shrink: true, style: {color: 'tomato'} }}
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
              InputLabelProps={{ shrink: true, style: {color: 'tomato'} }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirm_password"
              name="confirm_password"
              label="Confirm Password"
              type="password"
              variant='standard'
              color='error'
              InputLabelProps={{ shrink: true, style: {color: 'tomato'} }}
            />
            <FormControlLabel
              control={<Checkbox value="allowPdpa" color="primary" />}
              label={<PdpaLabel/>}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
            <Typography variant='body1' color='text.secondary' align='center'>
              Have an account? {' '}
              <Link color='error.main' href='/signin'>Sign In</Link>  
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}