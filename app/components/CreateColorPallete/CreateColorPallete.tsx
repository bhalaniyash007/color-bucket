'use client';

import { createContext, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import ColorPalete from '@components/ColorPalete/ColorPalete';
import ColorPicker from '@components/ColorPicker/ColorPicker';
import { IColorPaleteBucket, createColorPaletteContext } from '@types';

const DEFAULT_COLOR_BUCKET: IColorPaleteBucket = {
  colorBucket: [
    {
      color: '2A2F4F',
    },
    {
      color: '917FB3',
    },
    {
      color: 'E5BEEC',
    },
    {
      color: 'FDE2F3',
    },
  ],
};

interface IColorBucketProps {
  pickedColor: string;
}

const ColorBucket = ({ pickedColor }: IColorBucketProps) => {
  const colorPallete = DEFAULT_COLOR_BUCKET.colorBucket;
  const changeColorHandler = (bucketColorPalleteIndex: number) => {
    // eslint-disable-next-line security/detect-object-injection
    colorPallete[bucketColorPalleteIndex].color = pickedColor;
  };

  return (
    <ColorPalete
      colorPallete={{ colorBucket: colorPallete }}
      stateChangeHandler={changeColorHandler}
    />
  );
};

const CreateColorPallete = () => {
  const [selectedColor, setSelectedColor] = useState('000000');

  const selectNewColorHandler = (newColor: string) => {
    setSelectedColor(newColor);
  };
  return (
    <createColorPaletteContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        selectedPaletteIndex: 0,
        pickedColor: selectedColor,
        colorBucket: [
          {
            color: '2A2F4F',
          },
          {
            color: '917FB3',
          },
          {
            color: 'E5BEEC',
          },
          {
            color: 'FDE2F3',
          },
        ],
      }}>
      <Typography>New Color: {selectedColor}</Typography>
      <Grid container>
        <Grid sm={6} md={6} sx={{ textAlign: 'center' }}>
          <ColorBucket pickedColor={selectedColor} />
        </Grid>
        <Grid sm={6} md={6}>
          <ColorPicker
            setColorHandler={selectNewColorHandler}
            selectedColor={{
              color: '000000',
            }}
          />
        </Grid>
      </Grid>
    </createColorPaletteContext.Provider>
  );
};

export default CreateColorPallete;
