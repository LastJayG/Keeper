import { Box, Stack, Typography } from '@mui/material';
import { paperContainerSx } from '../../../styles/paper/paperContainerSx';
import {
  typographyPaperMediumCaption,
} from '../../../styles/typography/typographyCaptions';
import { addCodeSnippetComponentSx } from '../../../styles/codeSnippet/addCodeSnippetComponentSx';

interface CodeSnippetPaperProps {
  onClick?: () => void;
}

const AddCodeSnippetPaperComponent: React.FC<CodeSnippetPaperProps> = ({ onClick }) => {
  return (
    <Box onClick={onClick} sx={{ ...paperContainerSx }}>
      <Box sx={addCodeSnippetComponentSx}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" gap={2}>
          <Stack>
            <Typography variant="h6" sx={typographyPaperMediumCaption}>
              + Add code snippet
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddCodeSnippetPaperComponent;
