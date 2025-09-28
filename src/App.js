import React from 'react';

import Login from './pages/Login';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header>
        <h1>Teste</h1>
      </Header>
      <Login />
      <GlobalStyle />
    </div>
  );
}

export default App;
