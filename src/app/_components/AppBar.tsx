import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { ExitToApp as ExitIcon } from '@mui/icons-material';

export default function CustomAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" align='center' sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          href='/signin'
        >
          <ExitIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}