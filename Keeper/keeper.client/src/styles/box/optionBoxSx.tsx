import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const optionBoxSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  color: theme.customComponents.paper.chip.text,
  fontSize: '30px',
};
