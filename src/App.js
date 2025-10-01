import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </div>
  );
}

export default App;
