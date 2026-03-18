import { Box, Grid, Stack } from '@mui/material';
import { FolderDto } from '../../models/folder';
import FolderComponent from './components/FolderComponent';
import { useFolderLanguages } from '../../hooks/useFolderLanguages';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import PageBreadcrumbs from '../common/PageBreadcrumbsComponent';
import { baseBoxSx } from '../../styles/box/baseBoxSx';
import AddFolderComponent from './components/AddFolderComponent';

interface FoldersPagePresenterProps {
  folders: FolderDto[];
  handleGetFolders: () => void;
}

const FoldersPagePresenter: React.FC<FoldersPagePresenterProps> = ({ folders }) => {
  const { folderLanguages } = useFolderLanguages(folders);
  const navigate = useNavigate();

  return (
    <Box sx={baseBoxSx}>
      <PageBreadcrumbs crumbs={[{ label: 'Folders' }]} />

      <Box sx={{ maxWidth: '1600px', width: '100%' }}>
        <Grid container spacing={6} padding={4} justifyContent="center">
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
          <AddFolderComponent />
        </Grid>
      </Box>
    </Box>
  );
};
export default FoldersPagePresenter;
