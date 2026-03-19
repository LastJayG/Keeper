import { Theme } from '@emotion/react';
import { alpha, SxProps } from '@mui/material';
import { theme } from '../../theme';

export const addFolderTopSx: SxProps<Theme> = {
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-20px',
    left: '0px',
    width: '130px',
    height: '22px',
    borderColor: theme.palette.background.paper,
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
    opacity: '50%',
    borderStyle: 'dashed',
    borderRadius: '8px 8px 0 0',
    zIndex: 1,
  },
};
