import React from 'react';
import Typography from '@components/Typography/Typography';
import ThemeProvider from '@components/ThemeProvider';
import ColorPalete from '@components/ColorPalete/ColorPalete';
import { IColor, IColorPaleteBucket } from '@types';
import { Grid } from '@mui/material';
import ColorPicker from '@components/ColorPicker/ColorPicker';
import CreateColorPallete from '@components/CreateColorPallete/CreateColorPallete';

const CreatePallete = () => {
  return (
    <ThemeProvider>
      <Typography>Create new color pallete</Typography>
      <CreateColorPallete />
    </ThemeProvider>
  );
};

export default CreatePallete;
