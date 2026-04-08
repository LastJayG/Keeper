import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const editIconSx: SxProps<Theme> = {
  position: 'absolute',
  bottom: 8,
  right: 40,
  color: theme.customComponents.icon.edit,
};
