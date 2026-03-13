import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import CodeSnippetsPagePresenter from './CodeSnippetsPagePresenter';
import { CodeSnippetShortDto } from '../../models/codeSnippet';
import { useParams } from 'react-router-dom';

const CodeSnippetsPageContainer: React.FC = () => {
  const { folderId } = useParams<{ folderId: string }>();
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippetShortDto[]>([]);
  const [folderTitle, setFolderTitle] = useState<string>('');

  const handleGetCodeSnippets = async () => {
    if (!folderId) return;
    try {
      const data = await api.getCodeSnippetsByFolderId(folderId);
      setCodeSnippets(data);
    } catch (err) {
      console.error('Error fetching code snippets:', err);
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

  return <CodeSnippetsPagePresenter codeSnippets={codeSnippets} folderTitle={folderTitle} />;
};

export default CodeSnippetsPageContainer;
