import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const folderBodySx: SxProps<Theme> = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: theme.palette.background.paper,
  borderRadius: '0 8px 8px 8px',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.3)',
  transition: 'all 0.2s ease',
  height: '250px',
  width: '100%',
  padding: 2,
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
    transform: 'translateY(-3px)',
    boxShadow: '0px 8px 20px rgba(0,0,0,0.4)',
  },
};
