import { PaletteOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    iutOrange: Palette['primary'];
  }

  interface PaletteOptions {
    iutOrange?: PaletteOptions['primary'];
  }
}

declare module '@mui/lab/TimelineDot' {
  interface TimelineDotPropsColorOverrides {
    iutOrange: true;
  }
}
