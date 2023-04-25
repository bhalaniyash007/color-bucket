import { createContext } from 'react';

export type IColor = {
  color: string;
};

export interface IColorPaleteBucket {
  colorBucket: IColor[];
}

export type HtmlTags =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'inherit'
  | 'button'
  | 'overline'
  | 'caption'
  | 'subtitle1'
  | 'subtitle2'
  | 'body2'
  | undefined;

interface ICreateColorPaletteContext {
  selectedPaletteIndex: number;
  setSelectedPaletteIndex?: (paletteIndex: number) => {};
  pickedColor: string;
  colorBucket: IColor[];
  setPaletteColor?: (paletteIndex: number, color: string) => {};
}

export const createColorPaletteContext = createContext<ICreateColorPaletteContext>({
  selectedPaletteIndex: 0,
  pickedColor: '000000',
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
});
