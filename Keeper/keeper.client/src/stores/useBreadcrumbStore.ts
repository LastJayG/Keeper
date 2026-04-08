import { create } from 'zustand';
import { FolderDto } from '../models/folder';
import { CodeSnippetDto } from '../models/codeSnippet';
import { SvgIconComponent } from '@mui/icons-material';

interface Crumb {
  label?: string;
  icon?: SvgIconComponent;
  href?: string;
}

interface BreadcrumbStore {
  crumbs: Crumb[];
  setCrumbs: (crumbs: Crumb[]) => void;
  selectedFolder: FolderDto | null;
  setSelectedFolder: (folder: FolderDto) => void;
  selectedCodeSnippet: CodeSnippetDto | null;
  setSelectedCodeSnippet: (codeSnippet: CodeSnippetDto) => void;
}

export const useBreadcrumbStore = create<BreadcrumbStore>((set) => ({
  crumbs: [],
  setCrumbs: (crumbs) => set({ crumbs }),
  selectedFolder: null,
  setSelectedFolder: (folder) => set({ selectedFolder: folder }),
  selectedCodeSnippet: null,
  setSelectedCodeSnippet: (codeSnippet) => set({ selectedCodeSnippet: codeSnippet }),
}));
