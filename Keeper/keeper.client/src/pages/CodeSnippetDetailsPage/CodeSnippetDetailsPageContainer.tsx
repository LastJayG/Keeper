import { useEffect, useState } from 'react';
import { CodeSnippetDto } from '../../models/codeSnippet';
import CodeSnippetDetailsPagePresenter from './CodeSnippetDetailsPagePresenter';
import { api } from '../../api/api';
import { useParams } from 'react-router-dom';
import GradientCircularProgress from '../common/GradientCircularProgress';
import { useBreadcrumbStore } from '../../stores/useBreadcrumbStore';
import { ROUTES } from '../../routes';

const CodeSnippetDetailsPageContainer: React.FC = () => {
  const { folderId, codeSnippetId } = useParams<{ folderId: string; codeSnippetId: string }>();
  const [codeSnippet, setCodeSnippet] = useState<CodeSnippetDto>();
  const [isLoading, setIsLoading] = useState(true);
  const setCrumbs = useBreadcrumbStore((state) => state.setCrumbs);
  const selectedFolder = useBreadcrumbStore((state) => state.selectedFolder);

  const handleGetCodeSnippet = async () => {
    if (!codeSnippetId) return;
    try {
      const data = await api.getCodeSnippet(codeSnippetId);
      setCodeSnippet(data);
      setCrumbs([
        { label: 'Folders', href: ROUTES.FOLDERS },
        { label: selectedFolder?.title ?? 'Folder', href: ROUTES.getCodeSnippets(folderId!) },
        { label: data.title },
      ]);
    } catch (err: any) {
      console.error('Error fetching code snippets:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetCodeSnippet();

    return () => setCrumbs([]);
  }, [codeSnippetId]);

  return (
    <>
      {isLoading ? (
        <GradientCircularProgress isVisible={isLoading} />
      ) : (
        <CodeSnippetDetailsPagePresenter
          codeSnippet={codeSnippet}
          handleGetCodeSnippet={handleGetCodeSnippet}
        />
      )}
    </>
  );
};

export default CodeSnippetDetailsPageContainer;
