const COLOR_CELL = {
  HEIGHT: "60px",
  WIDTH: "200px",
};

const APP_SIDE_BAR = {
  WIDTH: "240px",
};
/**
 * Height and Width styling (size) for MUI Theme
 */
export const SIZE: I_SIZE = {
  NONE: "0rem",
  X_SMALL: "0.5rem",
  SMALL: "1rem",
  REGULAR: "1.25rem",
  LARGE: "1.5rem",
  X_LARGE: "2rem",
  XX_LARGE: "2.5rem",
  FULL: "100%",
  BUCKET: {
    HEIGHT: "80px",
    WIDTH: "100px",
  },
  COLOR_CELL,
  APP_SIDE_BAR,
};

export interface I_SIZE {
  NONE: string | number;
  X_SMALL: string | number;
  SMALL: string | number;
  REGULAR: string | number;
  LARGE: string | number;
  X_LARGE: string | number;
  XX_LARGE: string | number;
  FULL: string | number;
  BUCKET: {
    HEIGHT: string | number;
    WIDTH: string | number;
  };
  COLOR_CELL: {
    HEIGHT: string | number;
    WIDTH: string | number;
  };
  APP_SIDE_BAR: {
    WIDTH: string | number;
  };
}
