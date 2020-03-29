import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Team } from '../../components';

const visibleStart = true;
const League = () => {
  const [data, setData] = useState([]);
  const [url] = useState('teams/league/775');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await api(url);
        console.log(result);
        setData(result.data.api.teams);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchApi();

    return () => setData([]);
  }, [url]);
  return (
    <div className="container">
      <div className="row">
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div className="col">Loading ...</div>
        ) : (
          data.map((team, index) => {
            // eslint-disable-next-line camelcase
            const { name, logo, team_id } = team;
            return (
              <div className="col-sm-1 col-lg-2">
                <Team
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  name={name}
                  logo={logo}
                  visibleStart={visibleStart}
                  // eslint-disable-next-line camelcase
                  teamId={team_id}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default League;
