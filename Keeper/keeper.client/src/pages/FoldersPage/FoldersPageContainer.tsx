import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { FolderDto } from '../../models/folder';
import FoldersPagePresenter from './FoldersPagePresenter';
import GradientCircularProgress from '../common/GradientCircularProgress';

const FoldersPageContainer: React.FC = () => {
  const [folders, setFolders] = useState<FolderDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    handleGetFolders();
  }, []);

  return (
    <>
      {isLoading ? (
        <GradientCircularProgress isVisible={isLoading} />
      ) : (
        <FoldersPagePresenter folders={folders} handleGetFolders={handleGetFolders} />
      )}
    </>
  );
};

export default FoldersPageContainer;
