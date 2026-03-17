import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { theme } from '../../theme';

export const typographyPaperSmallCaption: SxProps<Theme> = {
  color: 'rgba(100, 80, 60, 0.5)',
  fontFamily: 'monospace',
  fontSize: '14px',
};

export const typographyPaperMediumCaption: SxProps<Theme> = {
  color: '#2c1f0e',
  fontWeight: 600,
  fontFamily: "'Georgia', serif",
  lineHeight: 1.3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export const typographyPaperBasicCaption: SxProps<Theme> = {
  color: '#2c1f0e',
  fontFamily: "'Georgia', serif",
  lineHeight: 1.3,
  overflow: 'hidden',
  mb: 2,
  mt: 2,
};

export const typographyFolderSmallCaption: SxProps<Theme> = {
  color: theme.palette.text.primary,
  fontFamily: 'monospace',
  fontSize: '14px',
};
