import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
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
    <div className='card'>
      <div className='media'>
        <img src={logo} alt={name} />
      </div>
      <Card>
        {/* <CardMedia className='media' image={logo} title={name} /> */}

        <CardContent>
          <Typography component='h2' align='center' color='primary'>
            {name}
          </Typography>
        </CardContent>
        <CardActions className='containerFavorite'>
          {favorite.state ? (
            <StarRate onClick={handleClick} className='star star_selected' />
          ) : (
            <StarBorderOutlined onClick={handleClick} className='star' />
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default Team;
