import { Box, CardContent, Stack, Typography } from '@mui/material';
import { addFolderTopSx } from '../../../styles/folder/addFolderTopSx';
import { addFolderBodySx } from '../../../styles/folder/addFolderBodySx';

interface AddFolderComponentProps {
  onClick: () => void;
}

const AddFolderComponent: React.FC<AddFolderComponentProps> = ({ onClick }) => {
  return (
    <Box sx={addFolderTopSx} onClick={onClick}>
      <Box sx={addFolderBodySx}>
        <Stack direction="row" justifyContent="center">
          <Stack direction="column" justifyContent="center">
            <CardContent>
              <Typography variant="h4">+ Add folder...</Typography>
            </CardContent>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddFolderComponent;
