import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import MainPagePresenter from './pages/MainPage/MainPagePresenter';
import HeaderComponent from './pages/common/HeaderComponent';
import { ROUTES } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <HeaderComponent />
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPagePresenter />} />
        {/*<Route path={ROUTES.FOLDERS} element={<MainPagePresenter />} />*/}
      </Routes>
    </ThemeProvider>
  );
}

export default App;