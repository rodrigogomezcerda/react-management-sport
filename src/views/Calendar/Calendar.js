import React, { useState, useEffect } from 'react';
import api from '../../api';
import { dateFormat } from '../../helpers/date';
import { timeFormat } from '../../helpers/time';
import { Game } from '../../components';

import './styles.scss';

const Calendar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { match } = props;
  // eslint-disable-next-line react/prop-types
  const { name } = match.params;
  const [data, setData] = useState([]);
  // eslint-disable-next-line react/prop-types
  const [url] = useState(`fixtures/team/${match.params.team}/last/3`);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await api(url);
        setData(result.data.api.fixtures);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchApi();

    return () => setData([]);
  }, [url]);

  return (
    <div className="calendars">
      Team:
      {name}
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div className="col">Loading ...</div>
      ) : (
        data.map((game, index) => (
          <Game
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            localeId={game.homeTeam.team_id}
            localeName={game.homeTeam.team_name}
            localeLogo={game.homeTeam.logo}
            localeAnotation={game.goalsHomeTeam}
            visitorId={game.awayTeam.team_id}
            visitorName={game.awayTeam.team_name}
            visitorLogo={game.awayTeam.logo}
            visitorAnotation={game.goalsAwayTeam}
            stadium={game.venue}
            date={dateFormat(game.event_date)}
            time={timeFormat(game.event_timestamp)}
            status={game.status}
          />
        ))
      )}
    </div>
  );
};

export default Calendar;
