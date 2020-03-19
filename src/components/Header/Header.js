import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import './styles.scss';

const Header = () => {
  return (
    <div className='app-bar'>
      <AppBar position='static'>
        <Toolbar>
          <div className='logo'></div>
          <Typography variant='h6' className='flex'></Typography>
          <Button color='inherit' component={Link} to='/league'>
            Teams
          </Button>
          <Button color='inherit' component={Link} to='/calendar'>
            Calendars
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
