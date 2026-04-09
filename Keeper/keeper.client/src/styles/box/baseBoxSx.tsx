import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const baseBoxSx: SxProps<Theme> = {
  width: '100%',
  backgroundColor: theme.palette.background.default,
  pt: '5%',
  justifyItems: 'center',
  minHeight: '100vh',
};
