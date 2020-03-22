import React from 'react';
import { Game } from '../../components';

import './styles.scss';

const Calendar = props => {
  const { match } = props;
  return (
    <div className='calendars'>
      Team: {match.params.team}
      <Game
        localeName='Felinos'
        localeLogo='https://media.api-sports.io/teams/531.png'
        localeAnotation='2'
        visitorName='Piratas'
        visitorLogo='https://media.api-sports.io/teams/531.png'
        visitorAnotation='1'
        stadium='Estadio Olímpico'
        date='20-Abril-2018'
        time='8:00 pm'
      />
      <Game
        localeName='Piratas'
        localeLogo='https://media.api-sports.io/teams/531.png'
        localeAnotation='2'
        visitorName='Tiburones'
        visitorLogo='https://media.api-sports.io/teams/531.png'
        visitorAnotation='2'
        stadium='Estadio Universitario'
        date='24-Abril-2018'
        time='7:00 pm'
      />
    </div>
  );
};

export default Calendar;
