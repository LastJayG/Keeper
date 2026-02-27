import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
     primary: {
      main: '#647aa3',
      light: '#a9def9',
      dark: '#383b53',
      contrastText: '#f4faff',
    },
    
    secondary: {
      main: '#b084cc',
      light: '#b7adcf',
      dark: '#665687',
      contrastText: '#f4faff',
    },
    background: {
      default: '#f4faff',
      paper: '#FFE9A2',
    },
     text: {
      primary: '#222e50',
      secondary: '#f4faff'
    },
     action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
  typography: {
    fontFamily:  '"Handjet", sans-serif'
  },
});

export const chartColors = [
  '#177E89',
  '#082d0f',
  '#5c415d',
  '#F08A4B',
  '#A29F15',
  '#A30000',
  '#F6839C',
  '#011936',
];