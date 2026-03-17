import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../theme';

export const baseBoxSx: SxProps<Theme> = {
  width: '100%',
  paddingTop: '5%',
  backgroundColor: theme.palette.background.default,
  justifyItems: 'center',
  minHeight: '100vh',
};
