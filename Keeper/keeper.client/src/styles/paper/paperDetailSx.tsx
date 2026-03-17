import { SxProps, Theme } from '@mui/material';

export const paperDetailSx: SxProps<Theme> = {
  position: 'relative',
  zIndex: 1,
  backgroundColor: '#f5f0e8',
  borderRadius: '2px',
  padding: '32px',
  boxShadow: '0px 2px 8px rgba(0,0,0,0.25), inset 0 0 40px rgba(0,0,0,0.03)',
  backgroundImage: `
    repeating-linear-gradient(
      transparent,
      transparent 27px,
      rgba(180, 160, 120, 0.15) 27px,
      rgba(180, 160, 120, 0.15) 28px
    )
  `,
  borderLeft: '3px solid rgba(200, 100, 100, 0.3)',
  width: '100%',
};
