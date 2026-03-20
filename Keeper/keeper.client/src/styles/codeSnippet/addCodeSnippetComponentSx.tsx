import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const addCodeSnippetComponentSx: SxProps<Theme> = {
  position: 'relative',
  width: '100%',
  height: '150px', 
  alignContent: 'center',
  justifyItems: 'center',
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