import React, { useState, useEffect } from 'react';
import { StarBorderOutlined, StarRate } from '@material-ui/icons';

import './styles.scss';

const Team = props => {
  const { logo, name } = props;
  const [favorite, setFavorite] = useState({
    state: false,
    click: false,
    dataLocalStorage: []
  });
  useEffect(() => {
    const localFavorite = JSON.parse(localStorage.getItem('favorite'));
    if (localFavorite) {
      const favoriteValue = localFavorite.find(team => {
        if (team.name === name) {
          return team.favorite;
        } else {
          return false;
        }
      });
      if (favoriteValue) {
        setFavorite({
          state: true,
          click: false,
          dataLocalStorage: localFavorite
        });
      } else {
        setFavorite({
          state: false,
          click: false,
          dataLocalStorage: favorite.dataLocalStorage
        });
      }
    }
  }, []);

  useEffect(() => {
    let teamNewInArray = [];
    const localFavorite = JSON.parse(localStorage.getItem('favorite'));
    if (
      localFavorite &&
      favorite.dataLocalStorage.length > 0 &&
      favorite.click !== false
    ) {
      console.log(favorite.click);

      const foundTeam = favorite.dataLocalStorage.find(
        team => team.name === name
      );
      if (!foundTeam) {
        teamNewInArray = [
          ...favorite.dataLocalStorage,
          {
            name: name,
            favorite: true
          }
        ];
      } else {
        teamNewInArray = favorite.dataLocalStorage.map(team => {
          let favoriteValue = team.favorite;
          if (team.name === name) {
            favoriteValue = !team.favorite;
          }
          return {
            ...team,
            favorite: favoriteValue
          };
        });
      }
      localStorage.setItem('favorite', JSON.stringify(teamNewInArray));
    } else if (favorite.click !== false) {
      teamNewInArray = [
        {
          name: name,
          favorite: true
        }
      ];
      localStorage.setItem('favorite', JSON.stringify(teamNewInArray));
    }
  }, [favorite, name]);

  const handleClick = () => {
    const localFavorite = JSON.parse(localStorage.getItem('favorite'));
    if (localFavorite) {
      setFavorite({
        state: !favorite.state,
        click: true,
        dataLocalStorage: localFavorite
      });
    } else {
      setFavorite({
        state: !favorite.state,
        click: true,
        dataLocalStorage: favorite.dataLocalStorage
      });
    }
  };

  return (
    <div>
      <img className='team-logo' src={logo} alt={name} />
      {favorite.state ? (
        <StarRate onClick={handleClick} />
      ) : (
        <StarBorderOutlined onClick={handleClick} />
      )}
    </div>
  );
};

export default Team;
