import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Team from '../Team';
import Player from '../Player';

import LogoFelines from './../../assets/logos/felinos.png';
import LogoPirates from './../../assets/logos/piratas.png';
import LogoSharks from './../../assets/logos/tiburones.png';

const League = () => {
  const [data, setData] = useState([]);
  const [url] = useState('https://api-mi-liga.now.sh/api/jugadores');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchApi();
    return () => setData([]);
  }, [url]);
  return (
    <div className='container'>
      <div className='list-team'>
        <Team name='Felinos' logo={LogoFelines} />
        <Team name='Piratas' logo={LogoPirates} />
        <Team name='Tiburones' logo={LogoSharks} />
      </div>
      <Button
        variant='contained'
        component={Link}
        to='/calendar'
        color='secondary'
      >
        Go to Calendar
      </Button>
      <div className='list-player'>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          data.map((player, index) => {
            return (
              <Player
                key={index}
                name={player.nombre}
                photo={require('../../assets/photo/' + player.foto)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default League;
