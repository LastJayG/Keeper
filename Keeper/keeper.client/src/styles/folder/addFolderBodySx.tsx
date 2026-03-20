import { Theme } from '@emotion/react';
import { alpha, SxProps } from '@mui/material';
import { theme } from '../../theme';

export const addFolderBodySx: SxProps<Theme> = {
  position: 'relative',
  zIndex: 2,
  borderRadius: '0 8px 8px 8px',
  borderColor: theme.palette.background.paper,
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  borderStyle: 'dashed',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.3)',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  alignContent: 'center',
  justifyItems: 'center',
  height: '250px',
  width: '100%',
  minWidth: '615px',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0px 8px 20px rgba(0,0,0,0.4)',
  },
};
