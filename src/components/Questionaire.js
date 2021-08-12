import React from 'react';
import { Grid } from '@material-ui/core';
import Question from './Question';
import Answers from './Answers';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ShowScore from './ShowScore';

const Questionaire = ({ questions }) => {
  const { questionIndex } = useContext(GlobalContext);

  return questionIndex === 9 ? (
    <div>
      <ShowScore />
    </div>
  ) : (
    <Grid container>
      <Grid container spacing={2}>
        <Grid item sm={2} />
        <Grid item sm={8} xs={12}>
          <Question questions={questions} />
        </Grid>
        <Answers questions={questions} />
      </Grid>
    </Grid>
  );
};

export default Questionaire;
