import { Paper, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Question = ({ questions }) => {
  const { questionIndex } = useContext(GlobalContext);

  return questions.length > 0 ? (
    <Paper
      style={{
        padding: '1rem',
      }}
      dangerouslySetInnerHTML={{ __html: questions[questionIndex].question }}
    ></Paper>
  ) : (
    <Typography variant='h5' align='center'>
      Loading...
    </Typography>
  );
};

export default Question;
