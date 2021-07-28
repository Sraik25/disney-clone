import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';
import Header from './components/Header';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes />
        </Provider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
