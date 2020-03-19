import React from 'react';

import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import Team from '../Team';

import './styles.scss';
import Stadium from '../../assets/stadium.png';

const Game = props => {
  const {
    localeName,
    localeLogo,
    visitorName,
    visitorLogo,
    localeAnotation,
    visitorAnotation,
    stadium,
    date,
    time
  } = props;

  return (
    <div className='games'>
      <Card className='card-game'>
        <CardHeader title='Locale' align='center' variant='heading' />
        <div className='logo-score'>
          <Team name={localeName} logo={localeLogo} />
          <Typography color='primary' className='score-game'>
            {localeAnotation}
          </Typography>
        </div>
        <CardContent>
          <Typography
            variant='h6'
            color='primary'
            align='center'
            component='h2'
          >
            {localeName}
          </Typography>
        </CardContent>
      </Card>
      <div className='info-game'>
        <img className='team-logo' src={Stadium} alt='Stadium' />
        <p>
          {stadium} <br />
          {date} <br />
          {time}
        </p>
      </div>

      <Card className='card-game'>
        <CardHeader title='Visitor' align='center' variant='heading' />
        <div className='logo-score'>
          <Team name={visitorName} logo={visitorLogo} />
          <Typography color='primary' className='score-game'>
            {visitorAnotation}
          </Typography>
        </div>
        <CardContent>
          <Typography
            variant='h6'
            color='primary'
            align='center'
            component='h2'
          >
            {visitorName}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Game;
