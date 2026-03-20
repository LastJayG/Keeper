import { Box, Grid, Typography } from '@mui/material';
import { CodeSnippetShortDto, CreateCodeSnippetDto } from '../../models/codeSnippet';
import CodeSnippetPaperComponent from './components/CodeSnippetPaperComponent';
import PageBreadcrumbs from '../common/PageBreadcrumbsComponent';
import { ROUTES } from '../../routes';
import { useNavigate } from 'react-router-dom';
import { baseBoxSx } from '../../styles/box/baseBoxSx';
import { typographyPaperMediumCaption } from '../../styles/typography/typographyCaptions';
import AddCodeSnippetPaperComponent from './components/AddCodeSnippetPaperComponent';
import { useState } from 'react';
import AddCodeSnippetForm from './components/AddCodeSnippetForm';

interface CodeSnippetsPagePresenterProps {
  folderId: string;
  folderTitle: string;
  codeSnippets: CodeSnippetShortDto[];
  handleCreateCodeSnippet: (codeSnippet: CreateCodeSnippetDto) => Promise<void>;
}

const CodeSnippetsPagePresenter: React.FC<CodeSnippetsPagePresenterProps> = ({
  codeSnippets,
  folderTitle,
  folderId,
  handleCreateCodeSnippet
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={baseBoxSx}>
      <PageBreadcrumbs
        crumbs={[{ label: 'Folders', href: ROUTES.FOLDERS }, { label: folderTitle }]}
      />
      {codeSnippets.length == 0 ? (
        <>
          <Typography variant="h6" sx={{ ...typographyPaperMediumCaption, pb: 2 }}>
            There are no code snippets yet...
          </Typography>
          <Grid container spacing={6} padding={4} justifyContent="center">
            <AddCodeSnippetPaperComponent onClick={() => setDialogOpen(true)}/>
            <AddCodeSnippetForm 
              folderId={folderId}
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              onSubmit={handleCreateCodeSnippet}
            />
          </Grid>
        </>
      ) : (
        <Box sx={{ maxWidth: '1600px', width: '100%' }}>
          <Grid container spacing={6} padding={4} justifyContent="center"  >
            <Grid size={{ xs: 12, xl: 6 }}>
              <AddCodeSnippetPaperComponent onClick={() => setDialogOpen(true)} />
            </Grid>
            {codeSnippets.map((codeSnippet, index) => (
              <Grid size={{ xs: 12, xl: 6 }} key={codeSnippet.id} sx={{ justifyItems: 'center' }}>
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
            <AddCodeSnippetForm 
              folderId={folderId}
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              onSubmit={handleCreateCodeSnippet}
            />
        </Box>
      )}
    </Box>
  );
};

export default CodeSnippetsPagePresenter;
