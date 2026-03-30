import { Box, Grid, Typography } from '@mui/material';
import { CreateFolderDto, FolderDto, UpdateFolderDto } from '../../models/folder';
import FolderComponent from './components/FolderComponent';
import { useFolderLanguages } from '../../hooks/useFolderLanguages';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import PageBreadcrumbs from '../common/PageBreadcrumbsComponent';
import { baseBoxSx } from '../../styles/box/baseBoxSx';
import AddFolderComponent from './components/AddFolderComponent';
import { useState } from 'react';
import AddFolderForm from './components/AddFolderForm';
import { typographyPaperMediumCaption } from '../../styles/typography/typographyCaptions';
import { useBreadcrumbStore } from '../../stores/useBreadcrumbStore';
import { useFolderStore } from '../../stores/useFolderStore';
import EditFolderForm from './components/EditFolderForm';

interface FoldersPagePresenterProps {
  folders: FolderDto[];
  handleCreateFolder: (folder: CreateFolderDto) => Promise<void>;
  handleEditFolder: (folderId: string, folder: UpdateFolderDto) => Promise<void>;
}

const FoldersPagePresenter: React.FC<FoldersPagePresenterProps> = ({
  folders,
  handleCreateFolder,
  handleEditFolder,
}) => {
  const { folderLanguages } = useFolderLanguages(folders);
  const [dialogAddOpen, setDialogAddOpen] = useState(false);
  const setSelectedFolder = useBreadcrumbStore((state) => state.setSelectedFolder);
  const setEditedFolder = useFolderStore((state) => state.setEditedFolder);
  const navigate = useNavigate();

  return (
    <Box sx={baseBoxSx}>
      <PageBreadcrumbs />
      {folders.length == 0 ? (
        <>
          <Typography variant="h6" sx={typographyPaperMediumCaption}>
            There are no folders yet...
          </Typography>
          <Grid container spacing={6} padding={4} justifyContent="center">
            <AddFolderComponent onClick={() => setDialogAddOpen(true)} />
            <AddFolderForm
              open={dialogAddOpen}
              onClose={() => setDialogAddOpen(false)}
              onSubmit={handleCreateFolder}
            />
          </Grid>
        </>
      ) : (
        <Box sx={{ maxWidth: '1600px', width: '100%' }}>
          <Grid container spacing={6} padding={4} justifyContent="center">
            <AddFolderComponent onClick={() => setDialogAddOpen(true)} />
            {folders.map((folder, index) => (
              <Grid size={{ xs: 10, xl: 5 }} key={folder.id} sx={{ justifyItems: 'center' }}>
                <FolderComponent
                  number={index + 1}
                  title={folder.title}
                  createdAt={folder.createdAt}
                  languages={folderLanguages[folder.id] ?? {}}
                  onClick={() => {
                    setSelectedFolder(folder);
                    navigate(ROUTES.getCodeSnippets(folder.id));
                  }}
                  onEdit={()=> {
                    setEditedFolder(folder);
                  }} 
                />
              </Grid>
            ))}
            <AddFolderForm
              open={dialogAddOpen}
              onClose={() => setDialogAddOpen(false)}
              onSubmit={handleCreateFolder}
            />
            <EditFolderForm
              onSubmit={handleEditFolder}
            />
          </Grid>
        </Box>
      )}
      ;
    </Box>
  );
};
export default FoldersPagePresenter;
