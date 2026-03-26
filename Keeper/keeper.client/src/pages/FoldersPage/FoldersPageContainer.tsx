import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { CreateFolderDto, FolderDto } from '../../models/folder';
import FoldersPagePresenter from './FoldersPagePresenter';
import GradientCircularProgress from '../common/GradientCircularProgress';
import { useBreadcrumbStore } from '../../stores/useBreadcrumbStore';

const FoldersPageContainer: React.FC = () => {
  const [folders, setFolders] = useState<FolderDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const setCrumbs = useBreadcrumbStore((state) => state.setCrumbs);

  const handleGetFolders = async () => {
    try {
      const data = await api.getFolders();
      setFolders(data);
    } catch (err) {
      console.error('Error fetching folders:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateFolder = async (folder: CreateFolderDto) => {
    try {
      await api.postFolder(folder);
      await handleGetFolders();
    } catch (err) {
      console.error('Error creating folder:', err);
    }
  };

  useEffect(() => {
    handleGetFolders();
    setCrumbs([{ label: 'Folders' }]);
  }, []);

  return (
    <>
      {isLoading ? (
        <GradientCircularProgress isVisible={isLoading} />
      ) : (
        <FoldersPagePresenter folders={folders} handleCreateFolder={handleCreateFolder} />
      )}
    </>
  );
};

export default FoldersPageContainer;
