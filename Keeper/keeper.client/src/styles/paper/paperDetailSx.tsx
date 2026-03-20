import { SxProps, Theme } from '@mui/material';
import { theme } from '../../theme';

export const paperDetailSx: SxProps<Theme> = {
  position: 'relative',
  zIndex: 1,
  backgroundColor: theme.customComponents.paper.background,
  borderRadius: '2px',
  padding: '32px',
  boxShadow: '0px 2px 8px rgba(0,0,0,0.25), inset 0 0 40px rgba(0,0,0,0.03)',
  backgroundImage: `
    repeating-linear-gradient(
      transparent,
      transparent 27px,
      ${theme.customComponents.paper.strokes} 27px,
      ${theme.customComponents.paper.strokes} 28px
    )
  `,
  borderLeft: `3px solid ${theme.customComponents.paper.leftBorder}`,
  width: '100%',
};
