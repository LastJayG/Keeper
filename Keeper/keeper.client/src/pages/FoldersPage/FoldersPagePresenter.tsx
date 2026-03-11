import { Box, Button, Grid, Paper} from "@mui/material"
import { theme } from "../../theme"
import { FolderDto } from "../../models/folder";
import FolderComponent from "./components/FolderComponent";
import { useFolderLanguages } from "../../hooks/useFolderLanguages";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

interface FoldersPagePresenterProps {
  folders: FolderDto[];
  handleGetFolders: () => void;
}

const FoldersPagePresenter: React.FC<FoldersPagePresenterProps> = ({
    folders
}) => {
    const { folderLanguages } = useFolderLanguages(folders);
    const navigate = useNavigate();
    return <>
        <Box
            sx={{
            width: '100%',
            backgroundColor: theme.palette.background.default,
            minHeight: '100vh',
            marginTop: 10,
            }}
        >
        <Grid container rowSpacing={2} alignItems='flex-start' sx={{ justifyContent: 'center', margin: 10}}>

        <Grid size={12} display="flex" justifyContent="center">
                    <Box sx={{ maxWidth: '800px', width: '100%'}}>
                        {(
                            <Grid container spacing={5} padding={4}>
                                {folders.map((folder, index) => (
                                    <Grid size={12} key={folder.id}>
                                        <FolderComponent
                                            number={index + 1}
                                            title={folder.title}
                                            createdAt={folder.createdAt}
                                            languages={folderLanguages[folder.id] ?? {}}
                                            onClick={() => navigate(ROUTES.getCodeSnippets(folder.id))}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Box>
                </Grid>
        </Grid>
        </Box>
    </>
}

export default FoldersPagePresenter;