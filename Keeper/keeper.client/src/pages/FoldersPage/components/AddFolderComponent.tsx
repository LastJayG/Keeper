import { Box, CardContent, Stack, Typography } from '@mui/material';
import { typographyFolderSmallCaption } from '../../../styles/typography/typographyCaptions';
import { addFolderTopSx } from '../../../styles/folder/addFolderTopSx';
import { addFolderBodySx } from '../../../styles/folder/addFolderBodySx';

const AddFolderComponent: React.FC = () => {
  return (
    <Box sx={addFolderTopSx}>
      <Box sx={addFolderBodySx}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pr: 2 }}>
          <Stack direction="column">
            <CardContent>
              <Typography variant="h5" sx={typographyFolderSmallCaption}>
                Add folder
              </Typography>
            </CardContent>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddFolderComponent;
