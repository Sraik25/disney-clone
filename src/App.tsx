import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import GlobalStyles from './styles/global';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyles />
    </div>
  );
}

export default App;
