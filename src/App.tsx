import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import usePersistedStateLs from './hooks/usePersistedStateLs';
import Router from './Router';
import GlobalStyles from './styles/globalStyles';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App = (): JSX.Element => {
  const [theme, setTheme] = usePersistedStateLs<DefaultTheme>('theme', dark);

  // Altera o tema e persiste a informação.
  const toggleTheme = React.useCallback(() => {
    const themeActive = theme.name === 'dark' ? light : dark;
    setTheme(themeActive);
  }, [theme.name, setTheme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Router />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
