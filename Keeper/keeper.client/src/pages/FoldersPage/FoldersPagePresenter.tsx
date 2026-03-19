import { Box, Grid, Stack, Typography } from '@mui/material';
import { CreateFolderDto, FolderDto } from '../../models/folder';
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

interface FoldersPagePresenterProps {
  folders: FolderDto[];
  handleGetFolders: () => void;
  handleCreateFolder: (folder: CreateFolderDto) => Promise<void>;
}

const FoldersPagePresenter: React.FC<FoldersPagePresenterProps> = ({ folders, handleCreateFolder }) => {
  const { folderLanguages } = useFolderLanguages(folders);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={baseBoxSx}>
      <PageBreadcrumbs crumbs={[{ label: 'Folders' }]} />
        {(folders.length == 0) ? (
        <Typography variant="h6" sx={typographyPaperMediumCaption}>There are no folders yet...</Typography>
      ) : (
      <Box sx={{ maxWidth: '1600px', width: '100%' }}>
        <Grid container spacing={6} padding={4} justifyContent="center">
          <AddFolderComponent onClick={() => setDialogOpen(true)} />
          {folders.map((folder, index) => (
            <Grid size={{ xs: 10, xl: 5 }} key={folder.id} sx={{ justifyItems: 'center' }}>
              <FolderComponent
                number={index + 1}
                title={folder.title}
                createdAt={folder.createdAt}
                languages={folderLanguages[folder.id] ?? {}}
                onClick={() => navigate(ROUTES.getCodeSnippets(folder.id))}
              />
            </Grid>
          ))}
          <AddFolderForm
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            onSubmit={handleCreateFolder}
          />
        </Grid>
      </Box>)};
    </Box>
  );
};
export default FoldersPagePresenter;
