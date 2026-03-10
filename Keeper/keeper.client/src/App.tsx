import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import HeaderComponent from './pages/common/HeaderComponent';
import { ROUTES } from './routes';
import FoldersPageContainer from './pages/FoldersPage/FoldersPageContainer';
import MainPageContainer from './pages/MainPage/MainPageContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderComponent />
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPageContainer />} />
        <Route path={ROUTES.FOLDERS} element={<FoldersPageContainer />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;