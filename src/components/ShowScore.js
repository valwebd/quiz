import React from 'react';
import { Button, Typography } from '@material-ui/core';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ShowScore = () => {
  const { score, resetState } = useContext(GlobalContext);

  const handleTryAgain = () => {
    resetState();
  };

  return (
    <div>
      <Typography>Your score: {score}</Typography>
      <Button variant='outlined' onClick={handleTryAgain}>
        Try Again
      </Button>
    </div>
  );
};

export default ShowScore;
