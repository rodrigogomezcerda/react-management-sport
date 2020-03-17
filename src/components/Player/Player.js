import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

import './styles.scss';

const Player = props => {
  const { photo, name } = props;
  return (
    <div>
      <Card className='card'>
        <CardMedia className='media' image={photo} title='Felinos' />
        <CardContent>
          <Typography
            variant='subheading'
            component='h2'
            align='center'
            color='primary'
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Player;
