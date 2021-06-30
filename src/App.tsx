import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import Routes from './routes';
import { GlobalStyle } from './styles/Global';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
