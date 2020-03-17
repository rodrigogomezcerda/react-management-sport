import React from 'react';

import './styles.scss';

const Team = props => {
  const { logo, name } = props;
  return (
    <div>
      <img className='team-logo' src={logo} alt={name} />
    </div>
  );
};

export default Team;
