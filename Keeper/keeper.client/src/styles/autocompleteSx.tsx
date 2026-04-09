import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../theme';

export const autocompleteSx: SxProps<Theme> = {
  color: theme.palette.primary.dark,
  fontSize: '14px',
  fontFamily: "'Georgia', serif",
};
