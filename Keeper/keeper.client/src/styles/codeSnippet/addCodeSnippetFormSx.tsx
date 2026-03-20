import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const addCodeSnippetFormSx: SxProps<Theme> = {
  borderRadius: '0 8px 8px 8px',
  borderColor: theme.palette.background.paper,
  height: '1050px',
  width: '100%',
  minWidth: '615px',
};
