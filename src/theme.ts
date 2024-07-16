import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    iutOrange: {
      main: 'rgb(255, 165, 0)', // Exemple de couleur orange
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
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

export default theme;
