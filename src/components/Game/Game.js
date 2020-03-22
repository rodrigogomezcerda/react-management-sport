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
    <div className='container'>
      <div className='row'>
        <div className='col-lg-2 col-sm-1'></div>
        <div className='col-lg-8 col-sm-10'>
          <div className='row fixture'>
            <div className='col-lg-4 col-sm-12'>
              <div className='logo-score'>
                <Team name={localeName} logo={localeLogo} />
                <Typography color='primary' className='score-game'>
                  {localeAnotation}
                </Typography>
              </div>
            </div>
            <div className='col-lg-4 col-sm-12'>
              <div className='info-game'>
                <img className='team-logo' src={Stadium} alt='Stadium' />
                <p>
                  {stadium} <br />
                  {date} <br />
                  {time}
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-sm-12'>
              <div className='logo-score'>
                <Team name={visitorName} logo={visitorLogo} />
                <Typography color='primary' className='score-game'>
                  {visitorAnotation}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-2 col-sm-1'></div>
      </div>
    </div>
  );
};

export default Game;
