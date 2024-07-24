import { PaletteOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    iutOrange: Palette['primary'];
    insaRouge: Palette['primary']
  }

  interface PaletteOptions {
    iutOrange?: PaletteOptions['primary'];
    insaRouge?: PaletteOptions['primary']
  }
}

declare module '@mui/lab/TimelineDot' {
  interface TimelineDotPropsColorOverrides {
    iutOrange: true;
    insaRouge:true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl:true;
  }
}