import { SxProps, Theme } from '@mui/material';
import { theme } from '../../theme';

export const paperContainerSx: SxProps<Theme> = {
  position: 'relative',
  width: '100%',
  cursor: 'pointer',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: '4px',
    right: '-4px',
    borderRadius: '2px',
    backgroundColor: theme.customComponents.paper.container.backgroundLight,
  },
  '&::before': {
    top: '4px',
    bottom: '-4px',
    zIndex: 0,
  },
  '&::after': {
    top: '8px',
    bottom: '-8px',
    right: '-8px',
    backgroundColor: theme.customComponents.paper.container.backgroundDark,
    zIndex: -1,
  },
};

export const paperChipSx: SxProps<Theme> = {
  flexShrink: 0,
  backgroundColor: theme.customComponents.paper.chip.background,
  color: theme.customComponents.paper.chip.text,
  fontFamily: 'monospace',
  fontSize: '12px',
  border: `1px solid ${theme.customComponents.paper.chip.background}`,
  borderRadius: '4px',
};
