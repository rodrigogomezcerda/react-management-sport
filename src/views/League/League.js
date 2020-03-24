import React, { useState, useEffect } from 'react';
import api from '../../api';

import { Team } from '../../components';
/* const dataTest = [
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Barcelona',
    logo: 'https://media.api-sports.io/teams/529.png'
  },
  {
    name: 'Celta Vigo',
    logo: 'https://media.api-sports.io/teams/538.png'
  }
]; */
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
    <div className='container'>
      <div className='row'>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div className='col'>Loading ...</div>
        ) : (
          data.map((team, index) => {
            const { name, logo, team_id } = team;
            return (
              <div className='col-sm-1 col-lg-2'>
                <Team
                  key={index}
                  name={name}
                  logo={logo}
                  visibleStart={visibleStart}
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
