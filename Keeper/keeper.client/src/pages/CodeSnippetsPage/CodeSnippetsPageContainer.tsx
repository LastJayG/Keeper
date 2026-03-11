import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import CodeSnippetsPagePresenter from './CodeSnippetsPagePresenter';
import { CodeSnippetShortDto } from '../../models/codeSnippet';
import { useParams } from 'react-router-dom';

const CodeSnippetsPageContainer: React.FC = () => {
  const { folderId } = useParams<{ folderId: string }>();
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippetShortDto[]>([]);

  const handleGetCodeSnippets = async () => {
    if (!folderId) return;
    try {
      const data = await api.getCodeSnippetsByFolderId(folderId);
      setCodeSnippets(data);
    } catch (err) {
      console.error('Error fetching code snippets:', err);
    }
  };

  useEffect(() => {
    handleGetCodeSnippets();
  }, [folderId]);

  return <CodeSnippetsPagePresenter codeSnippets={codeSnippets} />;
};

export default CodeSnippetsPageContainer;
