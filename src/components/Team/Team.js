/* eslint-disable object-curly-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { StarBorderOutlined, StarRate } from '@material-ui/icons';
import { useLocalStorage } from '../../hooks';
import './styles.scss';

const Team = (props) => {
  // eslint-disable-next-line react/prop-types
  const { logo, name, visibleStart, teamId } = props;
  const [localFavorite, setLocalFavorite] = useLocalStorage(name, false);

  const handleClick = () => {
    setLocalFavorite(!localFavorite);
  };

  return (
    <div className="card">
      <div className="media">
        {visibleStart ? (
          <Link to={`/calendar/${teamId}/${name}`}>
            <img src={logo} alt={name} />
          </Link>
        ) : (
          <img src={logo} alt={name} />
        )}
      </div>

      <Card>
        <CardContent>
          <Typography component="h2" align="center" color="primary">
            {name}
          </Typography>
        </CardContent>
        {visibleStart && (
          <CardActions className="containerFavorite">
            {localFavorite ? (
              <StarRate onClick={handleClick} className="star star_selected" />
            ) : (
              <StarBorderOutlined onClick={handleClick} className="star" />
            )}
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default Team;
