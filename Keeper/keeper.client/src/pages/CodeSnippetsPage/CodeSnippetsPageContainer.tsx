import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import CodeSnippetsPagePresenter from './CodeSnippetsPagePresenter';
import { CodeSnippetShortDto } from '../../models/codeSnippet';
import { useParams } from 'react-router-dom';
import GradientCircularProgress from '../common/GradientCircularProgress';

const CodeSnippetsPageContainer: React.FC = () => {
  const { folderId } = useParams<{ folderId: string }>();
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippetShortDto[]>([]);
  const [folderTitle, setFolderTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const handleGetCodeSnippets = async () => {
    if (!folderId) return;
    try {
      const data = await api.getCodeSnippetsByFolderId(folderId);
      setCodeSnippets(data);
    } catch (err) {
      console.error('Error fetching code snippets:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetFolder = async () => {
    if (!folderId) return;
    try {
      const data = await api.getFolder(folderId);
      setFolderTitle(data.title);
    } catch (err) {
      console.error('Error fetching code snippets:', err);
    }
  };

  useEffect(() => {
    handleGetCodeSnippets();
    handleGetFolder();
  }, [folderId]);

  return (
    <>
      {isLoading ? (
        <GradientCircularProgress isVisible={isLoading} />
      ) : (
        <CodeSnippetsPagePresenter
          codeSnippets={codeSnippets}
          folderId={folderId ?? ''}
          folderTitle={folderTitle}
        />
      )}{' '}
    </>
  );
};

export default CodeSnippetsPageContainer;
