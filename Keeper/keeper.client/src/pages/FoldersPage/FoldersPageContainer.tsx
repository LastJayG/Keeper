import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { FolderDto } from "../../models/folder";
import FoldersPagePresenter from "./FoldersPagePresenter";

const FoldersPageContainer: React.FC = () => {
const [folders, setFolders] = useState<FolderDto[]>([]);
  const handleGetFolders = async () => {
    try {
      const data = await api.getFolders();
      setFolders(data);
    } catch (err) {
      console.error('Error fetching folders:', err);
    }
  };

    useEffect(() => {
        handleGetFolders();
    }, []);

  return (
    <FoldersPagePresenter folders={folders} handleGetFolders={handleGetFolders}/>
  );
}

export default FoldersPageContainer;