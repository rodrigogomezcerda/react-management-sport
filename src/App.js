import React from 'react';
import { Header } from './components';
import Router from './Router';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Router />
      </div>
    </div>
  );
};

export default App;
