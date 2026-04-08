import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const deleteIconSx: SxProps<Theme> = {
  position: 'absolute',
  bottom: 8,
  right: 8,
  color: theme.customComponents.icon.delete,
};
