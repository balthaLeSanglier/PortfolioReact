import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl:2000,
    },
  },
  palette: {
    primary: {
      main: 'rgb(104, 219, 104)', // Vert clair comme couleur principale
    },
    secondary: {
      main: '#dc004e', // Couleur secondaire (exemple)
    },
    background: {
      default: '#f4f6f8', // Couleur de fond par défaut
      paper: '#ffffff', // Couleur de fond des éléments "papier"
    },
    text: {
      primary: '#333333', // Couleur de texte principale
      secondary: '#777777', // Couleur de texte secondaire
    },
    insaRouge:{
      main: '#ff7e75',
    },
    iutOrange: {
      main: 'rgb(255, 201, 101)', // Exemple de couleur orange
    },
  },
  typography: {
    header: {
      fontSize:"1rem",
      fontWeight:650,
      [createTheme().breakpoints.up('xl')]: {
        fontSize: '1.5rem',
      },
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 800,
      textAlign:'center',
      marginBottom:"5%",
      [createTheme().breakpoints.up('xl')]: {
        fontSize: '3rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      marginBottom:"5%",
      [createTheme().breakpoints.up('xl')]: {
        fontSize: '2rem',
      },
    },
    subtitle1: {
      fontSize:"1rem",
      [createTheme().breakpoints.up('xl')]: {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1rem',
      [createTheme().breakpoints.up('xl')]: {
        fontSize: '1.25rem',
      },
    },
    body2: {
      fontSize: '1rem',
      [createTheme().breakpoints.up('xl')]: {
        fontSize: '1rem',
      },
    },
    body3: {
      fontSize: '1.25rem',
      [createTheme().breakpoints.up('xl')]: {
        fontSize: '1.5rem',
      },
    },
    button: {
      textTransform: 'none', // Retire la transformation en majuscules
    },
  },
  spacing: 8, // Espacement par défaut de 8px entre les éléments
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Bordure personnalisée pour les boutons
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'rgb(104, 219, 104)', // Couleur personnalisée pour l'AppBar
        },
      },
    },
  },
});

theme = createTheme({
  ...theme,
  typography: {
    ...theme.typography,
    [theme.breakpoints.up('xl')]: {
      htmlFontSize: 40,
    },
  },
});


export default theme;
