'use client';

import { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import { THEME } from '@theme/theme';

const ThemeProvider = ({ children }: { children: ReactNode }): JSX.Element => (
  <MuiThemeProvider theme={THEME}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
