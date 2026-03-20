import { useEffect, useState } from 'react';
import { CodeSnippetDto } from '../../models/codeSnippet';
import CodeSnippetDetailsPagePresenter from './CodeSnippetDetailsPagePresenter';
import { api } from '../../api/api';
import { useLocation, useParams } from 'react-router-dom';
import GradientCircularProgress from '../common/GradientCircularProgress';

const CodeSnippetDetailsPageContainer: React.FC = () => {
  const { codeSnippetId } = useParams<{ codeSnippetId: string }>();
  const [codeSnippet, setCodeSnippet] = useState<CodeSnippetDto>();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const folderTitle = location.state?.folderTitle ?? '';
  const folderId = location.state?.folderId ?? '';

  const handleGetCodeSnippet = async () => {
    if (!codeSnippetId) return;
    try {
      const data = await api.getCodeSnippet(codeSnippetId);
      setCodeSnippet(data);
    } catch (err: any) {
      console.error('Error fetching code snippets:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetCodeSnippet();
  }, [codeSnippetId]);

  return (
    <>
      {isLoading ? (
        <GradientCircularProgress isVisible={isLoading} />
      ) : (
        <CodeSnippetDetailsPagePresenter
          codeSnippet={codeSnippet}
          folderId={folderId}
          folderTitle={folderTitle}
          handleGetCodeSnippet={handleGetCodeSnippet}
        />
      )}{' '}
    </>
  );
};

export default CodeSnippetDetailsPageContainer;
