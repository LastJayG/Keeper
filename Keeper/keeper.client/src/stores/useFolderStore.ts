import { create } from 'zustand';
import { FolderDto } from '../models/folder';

interface FolderStore {
  editedFolder: FolderDto | null;
  setEditedFolder: (folder: FolderDto | null) => void;
}

export const useFolderStore = create<FolderStore>((set) => ({
  editedFolder: null,
  setEditedFolder: (folder) => set({ editedFolder: folder }),
}));
