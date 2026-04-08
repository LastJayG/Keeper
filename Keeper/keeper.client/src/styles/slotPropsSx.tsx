import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../theme';

export const slotPropsSx: SxProps<Theme> = {
  color: theme.palette.primary.dark,
  fontSize: '24px',
  fontFamily: "'Georgia', serif",

  '& .MuiAutocomplete-option': {
    fontSize: '16px',
    fontFamily: "'Georgia', serif",
    padding: '10px 16px',
    color: theme.customComponents.paper.caption,
  },

  '& .MuiAutocomplete-groupLabel': {
    fontSize: '16px',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
    backgroundColor: theme.customComponents.paper.chip,
    padding: '4px 16px',
    lineHeight: '28px',
  },

  '& .MuiAutocomplete-listbox': {
    padding: 0,
  },
};
