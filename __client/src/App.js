import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as StoreProvider, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from './store';
import { GlobalStyles, theme } from './utils';
import HomePage from './pages/HomePage';

import { increment, decrement } from './store/actions';

const RootApp = () => {
  return (
    <>
      <GlobalStyles />
      <StoreProvider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
      </Route>
    </Switch>
  );
};

export default RootApp;
