import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyles from './utils/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Router>
    </>
  );
};

export default App;
