import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';
import { ROUTES } from '../../routes';

const HeaderComponent: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ marginBottom: 20 }}>
      <Toolbar sx={{ alignItems: 'flex-end', marginBottom: 1.5 }}>
        <Typography
          variant="h3"
          component={Link}
          to={ROUTES.HOME}
          color={theme.palette.text.secondary}
        >
          Keeper
        </Typography>
        <Typography
          variant="h4"
          component={Link}
          to={ROUTES.FOLDERS}
          color={theme.palette.text.secondary}
          sx={{ ml: 4 }}
        >
          Folders
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
