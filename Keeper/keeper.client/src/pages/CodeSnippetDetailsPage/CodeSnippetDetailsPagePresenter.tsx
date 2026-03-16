import { Box, Typography } from '@mui/material';
import { CodeSnippetDto } from '../../models/codeSnippet';
import { theme } from '../../theme';
import PageBreadcrumbs from '../common/PageBreadcrumbsComponent';
import { ROUTES } from '../../routes';
import CodeEditorComponent from './common/CodeEditorComponent';
import { paperDetailSx } from '../../styles/paperDetailSx';

interface CodeSnippetDetailsPagePresenterProps {
  folderId: string;
  folderTitle: string;
  codeSnippet?: CodeSnippetDto;
  handleGetCodeSnippet: () => void;
}

const CodeSnippetDetailsPagePresenter: React.FC<CodeSnippetDetailsPagePresenterProps> = ({
  codeSnippet,
  folderTitle,
  folderId,
}) => {
  if (!codeSnippet) return;
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.background.default,
          justifyItems: 'center',
          minHeight: '100vh',
          marginTop: 10,
          px: 10,
          py: 4,
        }}
      >
        <PageBreadcrumbs
          crumbs={[
            { label: 'Folders', href: ROUTES.FOLDERS },
            { label: folderTitle, href: ROUTES.getCodeSnippets(folderId) },
            { label: codeSnippet.title },
          ]}
        />
        <Box sx={{ maxWidth: '1400px', width: '100%', mx: 'auto' }}>
          <Box sx={paperDetailSx}>
            <Typography
              variant="h4"
              sx={{ color: '#2c1f0e', fontFamily: "'Georgia', serif", mb: 1 }}
            >
              {codeSnippet.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: 'rgba(80, 60, 40, 0.6)', fontFamily: 'monospace' }}
            >
              {new Date(codeSnippet.createdAt).toLocaleDateString()}
            </Typography>
            <Typography variant="h5" sx={{ color: '#2c1f0e', fontFamily: "'Georgia', serif", my: 2}}>{codeSnippet.description}</Typography>
            <CodeEditorComponent
              code={codeSnippet.code}
              programmingLanguage={codeSnippet.programmingLanguage}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CodeSnippetDetailsPagePresenter;
