import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import useControlRedux from './hooks/useControlRedux';
import usePersistedStateLs from './hooks/usePersistedStateLs';
import useToastError from './hooks/useToastError';
import Router from './Router';
import { userDataAutomatic } from './store/userReducer';
import GlobalStyles from './styles/globalStyles';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App = (): JSX.Element => {
  const [theme, setTheme] = usePersistedStateLs<DefaultTheme>('theme', dark);
  useToastError();

  // Conjunto referente ao redux.
  const { useAppDispatch, useAppSelector } = useControlRedux();
  const { data } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // Altera o tema e persiste a informação.
  const toggleTheme = React.useCallback(() => {
    const themeActive = theme.name === 'dark' ? light : dark;
    setTheme(themeActive);
  }, [theme.name, setTheme]);

  // Faz o login do usuário caso tenha algum token no local storage.
  React.useEffect(() => {
    const hasToken = localStorage.getItem('token');

    if (hasToken && !data.information) dispatch(userDataAutomatic());
  }, [dispatch, data]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Router />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
