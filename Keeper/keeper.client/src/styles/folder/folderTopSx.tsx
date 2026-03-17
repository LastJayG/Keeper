import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const folderTopSx: SxProps<Theme> = {
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-20px',
    left: '0px',
    width: '130px',
    height: '22px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px 8px 0 0',
    zIndex: 1,
  },
};
