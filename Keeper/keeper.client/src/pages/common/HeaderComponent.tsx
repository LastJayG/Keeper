import { AppBar, Toolbar, Typography } from "@mui/material";
import { theme } from '../../theme';

const HeaderComponent: React.FC = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Typography variant='h3' component='div' sx={{color: theme.palette.primary.contrastText}}>
                Keeper
            </Typography>
            <Typography variant='h5' component='div' sx={{ ml: 4, color: theme.palette.primary.contrastText }}>
                Folders
            </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;