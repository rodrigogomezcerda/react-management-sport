import React, { useState, useEffect } from 'react';
import api from '../../api';

import { Team } from '../../components';
const dataTest = [
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  },
  {
    name: 'Athletic Club',
    logo: 'https://media.api-sports.io/teams/531.png'
  }
];
const League = () => {
  const [data, setData] = useState(dataTest);
  const [url] = useState('teams/league/775');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  /* useEffect(() => {
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
  }, [url]); */

  return (
    <div className='container'>
      <div className='row'>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div className='col'>Loading ...</div>
        ) : (
          data.map((team, index) => {
            return (
              <div className='col-sm-1 col-lg-2'>
                <Team key={index} name={team.name} logo={team.logo} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default League;
