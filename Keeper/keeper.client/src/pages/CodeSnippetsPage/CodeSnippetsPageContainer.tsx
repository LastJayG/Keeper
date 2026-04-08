import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import CodeSnippetsPagePresenter from './CodeSnippetsPagePresenter';
import { CodeSnippetShortDto, CreateCodeSnippetDto } from '../../models/codeSnippet';
import { useParams } from 'react-router-dom';
import NoteIcon from '@mui/icons-material/Note';
import FolderIcon from '@mui/icons-material/Folder';
import GradientCircularProgress from '../common/GradientCircularProgress';
import { useBreadcrumbStore } from '../../stores/useBreadcrumbStore';
import { ROUTES } from '../../routes';

const CodeSnippetsPageContainer: React.FC = () => {
  const { folderId } = useParams<{ folderId: string }>();
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippetShortDto[]>([]);
  const [folderTitle, setFolderTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const setCrumbs = useBreadcrumbStore((state) => state.setCrumbs);
  const selectedFolder = useBreadcrumbStore((state) => state.selectedFolder);

  const handleGetCodeSnippets = async () => {
    if (!folderId) return;
    try {
      const data = await api.getCodeSnippetsByFolderId(folderId);
      setCodeSnippets(data);
      setCrumbs([
        { label: 'Folders', icon: FolderIcon, href: ROUTES.FOLDERS },
        { label: selectedFolder?.title ?? 'Folder', icon: NoteIcon, href: ROUTES.getCodeSnippets(folderId!) },
      ]);
    } catch (err) {
      console.error('Error fetching code snippets:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCodeSnippet = async (codeSnippet: CreateCodeSnippetDto) => {
    try {
      await api.postCodeSnippet(codeSnippet);
      await handleGetCodeSnippets();
    } catch (err) {
      console.error('Error creating code snippet:', err);
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
          handleCreateCodeSnippet={handleCreateCodeSnippet}
        />
      )}{' '}
    </>
  );
};

export default CodeSnippetsPageContainer;
