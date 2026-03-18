import { Box, Typography } from '@mui/material';
import { CodeSnippetDto } from '../../models/codeSnippet';
import PageBreadcrumbs from '../common/PageBreadcrumbsComponent';
import { ROUTES } from '../../routes';
import { paperDetailSx } from '../../styles/paper/paperDetailSx';
import { baseBoxSx } from '../../styles/box/baseBoxSx';
import PaperDetailsComponent from './common/PaperDetailsComponent';

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
      <Box sx={baseBoxSx}>
        <PageBreadcrumbs
          crumbs={[
            { label: 'Folders', href: ROUTES.FOLDERS },
            { label: folderTitle, href: ROUTES.getCodeSnippets(folderId) },
            { label: codeSnippet.title },
          ]}
        />
        <Box sx={{ maxWidth: '1400px', width: '100%', mx: 'auto' }}>
          <Box sx={paperDetailSx}>
            <PaperDetailsComponent
              code={codeSnippet.code}
              createdAt={codeSnippet.createdAt}
              description={codeSnippet.description}
              programmingLanguage={codeSnippet.programmingLanguage}
              title={codeSnippet.title}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CodeSnippetDetailsPagePresenter;
