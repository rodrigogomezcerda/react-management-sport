import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
          <Typography color='primary' className='score-game'>
            {localeAnotation}
          </Typography>
        </div>
        <CardContent>
          <Typography
            variant='title'
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
          <Typography color='primary' className='score-game'>
            {visitorAnotation}
          </Typography>
        </div>
        <CardContent>
          <Typography
            variant='title'
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
