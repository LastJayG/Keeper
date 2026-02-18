import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { theme } from '../../theme';

const MainPagePresenter: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
        }}
      >
       <Stack sx={{margin: 10, textAlign: 'center'}}>
            <Typography variant='h1'>Keep your code here!</Typography>
            <Typography variant='h4'>With us you will never forget about what you once wrote</Typography>
       </Stack>
      </Box>
    </>
  );
};

export default MainPagePresenter;
