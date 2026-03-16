import { Box, Stack, Typography, Chip } from '@mui/material';
import { paperContainerSx, paperSx, paperChipSx } from '../../../styles/paperContainerSx';

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
    <Box onClick={onClick} sx={{ ...paperContainerSx, cursor: onClick ? 'pointer' : 'default' }}>
      <Box sx={paperSx}>
        <Stack direction="row" alignItems="flex-start" justifyContent="space-between" gap={2}>
          <Stack spacing={0.5} sx={{ minWidth: 0 }}>
            <Typography
              variant="caption"
              sx={{ color: 'rgba(100, 80, 60, 0.5)', fontFamily: 'monospace', fontSize: '11px' }}
            >
              #{number}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#2c1f0e',
                fontWeight: 600,
                fontFamily: "'Georgia', serif",
                lineHeight: 1.3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: 'rgba(80, 60, 40, 0.6)', fontFamily: 'monospace', fontSize: '11px' }}
            >
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
