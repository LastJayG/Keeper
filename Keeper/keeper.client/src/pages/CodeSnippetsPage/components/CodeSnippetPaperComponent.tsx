import { Box, Stack, Typography, Chip } from '@mui/material';
import { paperContainerSx, paperChipSx } from '../../../styles/paper/paperContainerSx';
import {
  typographyPaperMediumCaption,
  typographyPaperSmallCaption,
} from '../../../styles/typography/typographyCaptions';
import { paperSx } from '../../../styles/paper/paperSx';

interface CodeSnippetPaperProps {
  number: number;
  title: string;
  createdAt: string;
  language: string;
  onClick?: () => void;
}

const CodeSnippetPaperComponent: React.FC<CodeSnippetPaperProps> = ({
  number,
  title,
  createdAt,
  language,
  onClick,
}) => {
  return (
    <Box onClick={onClick} sx={paperContainerSx}>
      <Box sx={paperSx}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" gap={2}>
          <Stack spacing={0.5} sx={{ minWidth: 0 }}>
            <Typography variant="caption" sx={typographyPaperSmallCaption}>
              #{number}
            </Typography>
            <Typography variant="h6" sx={typographyPaperMediumCaption}>
              {title}
            </Typography>

            <Typography variant="caption" sx={typographyPaperSmallCaption}>
              {new Date(createdAt).toLocaleDateString()}
            </Typography>
          </Stack>
          <Chip label={language} size="small" sx={paperChipSx} />
        </Stack>
      </Box>
    </Box>
  );
};

export default CodeSnippetPaperComponent;
