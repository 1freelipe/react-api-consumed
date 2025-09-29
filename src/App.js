import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header';
import RoutesPages from './routes';

function App() {
  return (
    <div>
      <Router history={history}>
        <Header />
        <RoutesPages />
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
