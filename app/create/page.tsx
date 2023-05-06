import React from 'react';
import { Grid } from '@mui/material';
import ColorPalete from '@components/ColorPalete/ColorPalete';
import ColorPicker from '@components/ColorPicker/ColorPicker';
import CreateColorPallete from '@components/CreateColorPallete/CreateColorPallete';
import ThemeProvider from '@components/ThemeProvider';
import Typography from '@components/Typography/Typography';
import { IColor, IColorPaleteBucket } from '@types';

const CreatePallete = () => (
  <ThemeProvider>
    <Typography>Create new color pallete</Typography>
    <CreateColorPallete />
  </ThemeProvider>
);

export default CreatePallete;
