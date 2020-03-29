import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import SportsSoccerTwoToneIcon from '@material-ui/icons/SportsSoccerTwoTone';
import './styles.scss';

const Header = () => (
  <div className="app-bar">
    <AppBar position="static">
      <Toolbar>
        <div className="logo">
          <SportsSoccerTwoToneIcon fontSize="large" />
        </div>
        <Typography variant="h6" className="flex" />
        <Button color="inherit" component={Link} to="/league">
          Teams
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
