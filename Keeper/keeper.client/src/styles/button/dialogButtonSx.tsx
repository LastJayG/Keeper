import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const dialogButtonSx: SxProps<Theme> = {
  color: theme.palette.primary.dark,
  fontSize: '32px',
};
