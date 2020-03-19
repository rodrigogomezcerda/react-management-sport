import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import Router from './Router';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
