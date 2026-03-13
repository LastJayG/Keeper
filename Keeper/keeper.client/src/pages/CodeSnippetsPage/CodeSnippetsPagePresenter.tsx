import { Box, Grid } from '@mui/material';
import { CodeSnippetShortDto } from '../../models/codeSnippet';
import { theme } from '../../theme';
import CodeSnippetPaperComponent from './components/CodeSnippetPaperComponent';
import PageBreadcrumbs from '../common/PageBreadcrumbsComponent';
import { ROUTES } from '../../routes';

interface CodeSnippetsPagePresenterProps {
  folderTitle: string,
  codeSnippets: CodeSnippetShortDto[];
}

const CodeSnippetsPagePresenter: React.FC<CodeSnippetsPagePresenterProps> = ({ codeSnippets, folderTitle }) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        marginTop: 10,
        px: 10,
        py: 4,
      }}
    >
      <Box sx={{ paddingLeft: '100px' }}>
        <PageBreadcrumbs crumbs={[
          { label: 'Folders', href: ROUTES.FOLDERS },
          { label: folderTitle },
        ]} />

        <Box sx={{ maxWidth: '1600px', width: '100%' }}>
          <Grid container spacing={5} padding={4} justifyContent="center">
            {codeSnippets.map((codeSnippet, index) => (
              <Grid size={{ xs: 12, xl: 6 }} key={codeSnippet.id}>
                <CodeSnippetPaperComponent
                  number={index + 1}
                  title={codeSnippet.title}
                  createdAt={codeSnippet.createdAt}
                  language={codeSnippet.programmingLanguage}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeSnippetsPagePresenter;