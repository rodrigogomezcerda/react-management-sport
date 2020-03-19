import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './styles.scss';

const Header = () => {
  return (
    <div className='app-bar'>
      <AppBar position='static'>
        <Toolbar>
          <div className='logo'></div>
          <Typography variant='h6' className='flex'></Typography>
          <Button color='inherit'>
            <a href='/league'>Team's</a>
          </Button>
          <Button color='inherit'>
            <a href='/calendar'>Calendar's</a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
