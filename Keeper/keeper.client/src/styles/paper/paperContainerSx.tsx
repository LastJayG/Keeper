import { SxProps, Theme } from '@mui/material';

export const paperContainerSx: SxProps<Theme> = {
  position: 'relative',
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

export const paperSx: SxProps<Theme> = {
  position: 'relative',
  zIndex: 1,
  backgroundColor: '#f5f0e8',
  borderRadius: '2px',
  padding: '24px 28px',
  boxShadow: '0px 2px 8px rgba(0,0,0,0.25), inset 0 0 40px rgba(0,0,0,0.03)',
  backgroundImage: `
    repeating-linear-gradient(
      transparent,
      transparent 27px,
      rgba(180, 160, 120, 0.15) 27px,
      rgba(180, 160, 120, 0.15) 28px
    )
  `,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-3px) rotate(-0.3deg)',
    boxShadow: '0px 8px 20px rgba(0,0,0,0.3), inset 0 0 40px rgba(0,0,0,0.03)',
  },
  borderLeft: '3px solid rgba(200, 100, 100, 0.3)',
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
