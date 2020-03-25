import React from 'react';

import { Typography } from '@material-ui/core';
import Team from '../Team';

import './styles.scss';
import Stadium from '../../assets/stadium.png';

const visibleStart = false;
const Game = props => {
  const {
    localeId,
    localeName,
    localeLogo,
    visitorId,
    visitorName,
    visitorLogo,
    localeAnotation,
    visitorAnotation,
    stadium,
    date,
    time,
    status
  } = props;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-2 col-sm-1'></div>
        <div className='col-lg-8 col-sm-10'>
          <div className='row fixture'>
            <div className='col-lg-4 col-sm-12'>
              <div className='logo-score'>
                <Team
                  name={localeName}
                  logo={localeLogo}
                  visibleStart={visibleStart}
                  teamId={localeId}
                />
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
                  {time} <br />
                  {status}
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-sm-12'>
              <div className='logo-score'>
                <Team
                  name={visitorName}
                  logo={visitorLogo}
                  visibleStart={visibleStart}
                  teamId={visitorId}
                />
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
