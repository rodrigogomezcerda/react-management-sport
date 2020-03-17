import React from 'react';
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
      <div className='list-player'>
        <Team name='Sergio' logo={PhotoSergio} />
        <Team name='Manuel' logo={PhotoManuel} />
        <Team name='Jose' logo={PhotoJose} />
        <Team name='Paco' logo={PhotoPaco} />
      </div>
    </div>
  );
};

export default League;
