import { Box, Grid } from '@mui/material';
import { CodeSnippetShortDto } from '../../models/codeSnippet';
import { theme } from '../../theme';
import CodeSnippetPaperComponent from './components/CodeSnippetPaperComponent';
import PageBreadcrumbs from '../common/PageBreadcrumbsComponent';
import { ROUTES } from '../../routes';
import { useNavigate } from 'react-router-dom';
import { baseBoxSx } from '../../styles/box/baseBoxSx';

interface CodeSnippetsPagePresenterProps {
  folderId: string;
  folderTitle: string;
  codeSnippets: CodeSnippetShortDto[];
}

const CodeSnippetsPagePresenter: React.FC<CodeSnippetsPagePresenterProps> = ({
  codeSnippets,
  folderTitle,
  folderId,
}) => {
  const navigate = useNavigate();
  return (
    <Box sx={baseBoxSx}>
      <PageBreadcrumbs
        crumbs={[{ label: 'Folders', href: ROUTES.FOLDERS }, { label: folderTitle }]}
      />
      <Box sx={{ maxWidth: '1600px', width: '100%' }}>
        <Grid container spacing={5} padding={4} justifyItems="center">
          {codeSnippets.map((codeSnippet, index) => (
            <Grid size={{ xs: 12, xl: 6 }} key={codeSnippet.id}>
              <CodeSnippetPaperComponent
                number={index + 1}
                title={codeSnippet.title}
                createdAt={codeSnippet.createdAt}
                language={codeSnippet.programmingLanguage}
                onClick={() =>
                  navigate(ROUTES.getCodeSnippet(folderId, codeSnippet.id), {
                    state: { folderTitle, folderId },
                  })
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CodeSnippetsPagePresenter;
