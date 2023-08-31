'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const defaultTheme = createTheme();

export default function Providers({children}: { children: React.ReactNode }) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
