import React from 'react';
import Game from '../Game';

import LogoFelines from '../../assets/logos/felinos.png';
import LogoPirates from '../../assets/logos/piratas.png';
import LogoShark from '../../assets/logos/tiburones.png';

const Calendar = () => {
  return (
    <div className='calendars'>
      <Game
        localeName='Felinos'
        localeLogo={LogoFelines}
        localeAnotation='2'
        visitorName='Piratas'
        visitorLogo={LogoPirates}
        visitorAnotation='1'
        stadium='Estadio Olímpico'
        date='20-Abril-2018'
        time='8:00 pm'
      />
      <Game
        localeName='Piratas'
        localeLogo={LogoPirates}
        localeAnotation='2'
        visitorName='Tiburones'
        visitorLogo={LogoShark}
        visitorAnotation='2'
        stadium='Estadio Universitario'
        date='24-Abril-2018'
        time='7:00 pm'
      />
    </div>
  );
};

export default Calendar;
