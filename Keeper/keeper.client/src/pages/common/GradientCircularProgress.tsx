import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { loaderBoxSx } from '../../styles/box/loaderBoxSx';
import { theme } from '../../theme';

interface GradientCircularProgressProps {
  isVisible: boolean;
}

function GradientCircularProgress({ isVisible }: GradientCircularProgressProps) {
  if (!isVisible) return null;
  return (
    <Box sx={loaderBoxSx}>
      <Box sx={{ justifyContent: 'center' }}>
        <React.Fragment>
          <svg width={0} height={0}>
            <defs>
              <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={theme.palette.primary.dark} />
                <stop offset="100%" stopColor={theme.palette.primary.light} />
              </linearGradient>
            </defs>
          </svg>
          <CircularProgress size={100} sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        </React.Fragment>
      </Box>
    </Box>
  );
}

export default GradientCircularProgress;
