import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

import './styles.scss';

const Player = (props) => {
  // eslint-disable-next-line react/prop-types
  const { photo, name } = props;
  return (
    <div>
      <Card className="card">
        <CardMedia className="media" image={photo} title="Felinos" />
        <CardContent>
          <Typography component="h2" align="center" color="primary">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Player;
