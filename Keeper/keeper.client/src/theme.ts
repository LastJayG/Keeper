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
      paper: '#f5f0e8',
    },
    text: {
      primary: '#222e50',
      secondary: '#f4faff',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },

  customComponents: {
    folder: {
      background: '#FFE9A2',
    },
    paper: {
      background: '#f5f0e8',
      strokes: 'rgba(180, 160, 120, 0.15)',
      leftBorder: 'rgba(200, 100, 100, 0.3)',
      shadow: '',
      chip: {
        background: 'rgba(180, 140, 80, 0.2)',
        border: 'rgba(180, 140, 80, 0.4)',
        text: '#5c3d1e',
      },
      container: {
        backgroundLight: '#c8c0b0',
        backgroundDark: '#b8b0a0',
      },
      caption: {
        small: 'rgba(100, 80, 60, 0.5)',
        medium: '#2c1f0e',
        basic: '#2c1f0e',
      },
    },
    icon: {
      delete: '#A30000',
      edit: '#222e50',
    },
  },

  typography: {
    fontFamily: '"Handjet", sans-serif',
  },
});

declare module '@mui/material/styles' {
  interface ThemeOptions {
    customComponents: {
      folder: {
        background: string;
      };
      paper: {
        background: string;
        strokes: string;
        leftBorder: string;
        shadow: string;
        chip: {
          background: string;
          border: string;
          text: string;
        };
        container: {
          backgroundLight: string;
          backgroundDark: string;
        };
        caption: {
          small: string;
          medium: string;
          basic: string;
        };
      };
      icon: {
        delete: string;
        edit: string;
      };
    };
  }

  interface Theme {
    customComponents: {
      folder: {
        background: string;
      };
      paper: {
        background: string;
        strokes: string;
        leftBorder: string;
        shadow: string;
        chip: {
          background: string;
          border: string;
          text: string;
        };
        container: {
          backgroundLight: string;
          backgroundDark: string;
        };
        caption: {
          small: string;
          medium: string;
          basic: string;
        };
      };
      icon: {
        delete: string;
        edit: string;
      };
    };
  }
}

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
