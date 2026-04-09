import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const folderBodySx: SxProps<Theme> = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: theme.customComponents.folder.background,
  borderRadius: '0 8px 8px 8px',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.3)',
  transition: 'all 0.2s ease',
  height: '250px',
  width: '100%',
  minWidth: '615px',
  maxWidth: '615px',
  padding: 2,
  '&:hover': {
    backgroundColor: theme.customComponents.folder.background,
    transform: 'translateY(-3px)',
    boxShadow: '0px 8px 20px rgba(0,0,0,0.4)',
    cursor: 'pointer',
  },
};
