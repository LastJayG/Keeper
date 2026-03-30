import { Box } from '@mui/material';
import { CodeSnippetDto } from '../../models/codeSnippet';
import PageBreadcrumbs from '../common/PageBreadcrumbsComponent';
import { paperDetailSx } from '../../styles/paper/paperDetailSx';
import { baseBoxSx } from '../../styles/box/baseBoxSx';
import PaperDetailsComponent from './components/PaperDetailsComponent';

interface CodeSnippetDetailsPagePresenterProps {
  codeSnippet?: CodeSnippetDto;
  handleGetCodeSnippet: () => void;
}

const CodeSnippetDetailsPagePresenter: React.FC<CodeSnippetDetailsPagePresenterProps> = ({
  codeSnippet,
}) => {
  if (!codeSnippet) return;
  return (
    <>
      <Box sx={baseBoxSx}>
        <PageBreadcrumbs />
        <Box sx={{ maxWidth: '1600px', width: '100%' }}>
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
