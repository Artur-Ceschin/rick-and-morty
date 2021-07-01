import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyle } from './styles/Global';
import Modal from 'react-modal'
import { FavoriteCaracterProvider } from './hooks/useFavoriteCaracter';

Modal.setAppElement("#root");

function App() {
  return (
    <FavoriteCaracterProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </FavoriteCaracterProvider>
  );
}

export default App;
