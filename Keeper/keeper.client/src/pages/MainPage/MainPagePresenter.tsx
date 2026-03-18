import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { baseBoxSx } from '../../styles/box/baseBoxSx';

const MainPagePresenter: React.FC = () => {
  return (
    <>
      <Box sx={baseBoxSx}>
        <Stack sx={{ margin: 10, textAlign: 'center', justifyItems: 'center' }}>
          <Typography variant="h1">Keep your code here!</Typography>
          <Typography variant="h4">
            With us you will never forget about what you once wrote
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default MainPagePresenter;
