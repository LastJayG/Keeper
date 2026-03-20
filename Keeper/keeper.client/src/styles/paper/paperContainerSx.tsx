import { SxProps, Theme } from '@mui/material';

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
    backgroundColor: '#c8c0b0',
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
    backgroundColor: '#b8b0a0',
    zIndex: -1,
  },
};

export const paperChipSx: SxProps<Theme> = {
  flexShrink: 0,
  backgroundColor: 'rgba(180, 140, 80, 0.2)',
  color: '#5c3d1e',
  fontFamily: 'monospace',
  fontSize: '11px',
  border: '1px solid rgba(180, 140, 80, 0.4)',
  borderRadius: '4px',
};
