'use client';

import * as React from 'react';
import { useContext, useState } from 'react';
import { Stack } from '@mui/material';
import ColorCell from '@components/ColorCell';
import Typography from '@components/Typography/Typography';
import { MOCKDATA } from '@constants';
import { COLORS } from '@styles';
import { IColorPaleteBucket, createColorPaletteContext } from '@types';

interface IColorPaleteProps {
  colorPallete: IColorPaleteBucket;
  stateChangeHandler?: (index: number) => void;
}

const ColorPalete = ({ colorPallete, stateChangeHandler }: IColorPaleteProps) => {
  const { selectedPaletteIndex, pickedColor, colorBucket } = useContext(createColorPaletteContext);
  const [paletteIndex, setPaletteIndex] = useState(0);
  const onPaletteClickHandler = (index: number) => {
    setPaletteIndex(index);
    // colorBucket[paletteIndex].color = pickedColor;
  };
  return (
    <>
      {/* {MOCKDATA.colorPalletes.map((colorPallete: IColorPaleteBucket) => { */}
      {/* return (
      <> */}

      <div
        className="color-palete"
        style={{
          padding: '5px',
          overflow: 'auto',
          display: 'inline-block',
          background: COLORS.COLOR_BUCKET.border,
          borderRadius: '8px',
          margin: '20px',
        }}>
        <Typography>Color 1: {colorBucket[0].color}</Typography>
        <Typography>Color 2: {colorBucket[1].color}</Typography>
        <Typography>Color 3: {colorBucket[2].color}</Typography>
        <Typography>Color 4: {colorBucket[3].color}</Typography>
        <Stack spacing={0}>
          {/* <div
            onClick={() => {
              // stateChangeHandler && stateChangeHandler(0);
              onPaletteClickHandler(0);
            }}>
            <ColorCell
              color={paletteIndex === 0 ? pickedColor : colorPallete.colorBucket[0].color}
            />
          </div>
          <div
            onClick={() => {
              // stateChangeHandler && stateChangeHandler(0);
              onPaletteClickHandler(1);
            }}>
            <ColorCell
              color={paletteIndex === 1 ? pickedColor : colorPallete.colorBucket[1].color}
            />
          </div> */}
          {/* <ColorCell color={colorPallete.colorBucket[1].color} /> */}
          <ColorCell color={colorPallete.colorBucket[2].color} />
          <ColorCell color={colorPallete.colorBucket[3].color} />
        </Stack>
      </div>
      {/* </> */}
      {/* ); */}
      {/* })} */}
    </>
  );
};

export default ColorPalete;
