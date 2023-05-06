import { Color } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { SIZE, FONT, I_SIZE, I_FONT, TYPOGRAPHY } from './styles';

declare module '@mui/material/styles' {
  interface Palette {
    green: Partial<Color>;
    white: Partial<Color>;
    black: Partial<Color>;
    yellow: Partial<Color>;
  }
  interface Theme {
    font: I_FONT;
    size: I_SIZE;
  }
  interface ThemeOptions {
    font: I_FONT;
    size: I_SIZE;
  }
}

/**
 * MUI Theme with all custom variables and extra arguments
 *
 */
export const THEME = createTheme({
  typography: TYPOGRAPHY,
  font: FONT,
  size: SIZE,
});
