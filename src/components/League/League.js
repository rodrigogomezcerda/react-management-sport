import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Team from '../Team';
import Player from '../Player';

import LogoFelines from './../../assets/logos/felinos.png';
import LogoPirates from './../../assets/logos/piratas.png';
import LogoSharks from './../../assets/logos/tiburones.png';
import PhotoSergio from './../../assets/photo/sergio.png';
import PhotoManuel from './../../assets/photo/manuel.png';
import PhotoJose from './../../assets/photo/jose.png';
import PhotoPaco from './../../assets/photo/paco.png';

const League = () => {
  return (
    <div className='container'>
      <div className='list-team'>
        <Team name='Felines' logo={LogoFelines} />
        <Team name='Pirates' logo={LogoPirates} />
        <Team name='Sharks' logo={LogoSharks} />
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
        <Player name='Sergio' photo={PhotoSergio} />
        <Player name='Manuel' photo={PhotoManuel} />
        <Player name='Jose' photo={PhotoJose} />
        <Player name='Paco' photo={PhotoPaco} />
      </div>
    </div>
  );
};

export default League;
