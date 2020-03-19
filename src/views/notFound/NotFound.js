import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const NotFound = () => {
  return (
    <div className='error'>
      <h1>Page not found</h1>
      <h2 className='e404'>Error 404</h2>
      <Button variant='raised' component={Link} to='/' color='secondary'>
        Go to home
      </Button>
    </div>
  );
};

export default NotFound;
