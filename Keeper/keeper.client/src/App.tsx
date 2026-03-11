import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { ROUTES } from './routes';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderComponent from './pages/common/HeaderComponent';
import FoldersPageContainer from './pages/FoldersPage/FoldersPageContainer';
import MainPageContainer from './pages/MainPage/MainPageContainer';
import CodeSnippetsPageContainer from './pages/CodeSnippetsPage/CodeSnippetsPageContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderComponent />
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPageContainer />} />
        <Route path={ROUTES.FOLDERS} element={<FoldersPageContainer />} />
        <Route path={ROUTES.CODE_SNIPPETS} element={<CodeSnippetsPageContainer />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;