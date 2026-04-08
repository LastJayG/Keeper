export interface FolderDto {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateFolderDto {
  title: string;
}

export interface UpdateFolderDto {
  title: string;
}
