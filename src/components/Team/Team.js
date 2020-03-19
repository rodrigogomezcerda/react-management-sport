import React, { useState, useEffect } from 'react';

import { StarBorderOutlined, StarRate, Favorite } from '@material-ui/icons';

import './styles.scss';

const Team = props => {
  const { logo, name } = props;
  const [fav, setFav] = useState(false);
  const [dataLocalStorage, setdataLocalStorage] = useState([{}]);

  useEffect(() => {
    const localFavorite = JSON.parse(localStorage.getItem('favorite'));
    setdataLocalStorage(localFavorite);
    if (localFavorite) {
      const favorite = localFavorite.find(team => team.name === name);
      if (favorite) {
        if (favorite.favorite) {
          setFav(true);
        } else {
          setFav(false);
        }
      } else {
        setFav(false);
      }
    }
  }, [name]);

  const handleClick = () => {
    if (dataLocalStorage) {
      const favorite = dataLocalStorage.find(team => team.name === name);
      if (!favorite) {
        const favoriteNewInArray = [
          ...dataLocalStorage,
          {
            name: name,
            favorite: true
          }
        ];
        localStorage.setItem('favorite', JSON.stringify(favoriteNewInArray));
      }
    }

    const favoriteNew = dataLocalStorage.map(team => {
      let favoriteValue = team.favorite;
      if (team.name === name) {
        favoriteValue = !team.favorite;
      }
      return {
        ...team,
        favorite: favoriteValue
      };
    });
    setFav(!fav);
    setdataLocalStorage(favoriteNew);
    console.log(favoriteNew);
    localStorage.setItem('favorite', JSON.stringify(favoriteNew));
  };

  return (
    <div>
      <img className='team-logo' src={logo} alt={name} />
      {fav ? (
        <StarRate onClick={handleClick} />
      ) : (
        <StarBorderOutlined onClick={handleClick} />
      )}
    </div>
  );
};

export default Team;
