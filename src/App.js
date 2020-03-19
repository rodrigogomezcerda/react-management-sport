import React, { useEffect } from 'react';
import { Header } from './components';
import Router from './Router';

const App = () => {
  useEffect(() => {
    const localFavs = localStorage.getItem('favorite');
    if (!localFavs) {
      const initialFavorite = [
        {
          name: 'Piratas',
          favorite: true
        },
        {
          name: 'Tiburones',
          favorite: true
        }
      ];
      localStorage.setItem('favorite', JSON.stringify(initialFavorite));
    }
  }, []);

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
