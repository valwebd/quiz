import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Grid, Button } from '@material-ui/core';

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const Answers = ({ questions }) => {
  const { questionIndex, updateScore, updateIndex } = useContext(GlobalContext);

  const onClick = (e) => {
    questionIndex < 9 && updateIndex();

    e.target.innerHTML === questions[questionIndex].correct_answer &&
      updateScore();

    questionIndex === 9 && console.log('stop');
  };

  return questions.length > 0
    ? shuffle([
        questions[questionIndex].correct_answer,
        ...questions[questionIndex].incorrect_answers,
      ]).map((answer) => {
        return (
          <Grid item xs={12} sm={6} key={answer}>
            <Button
              fullWidth
              color='primary'
              variant='contained'
              onClick={onClick}
            >
              <div dangerouslySetInnerHTML={{ __html: answer }} />
            </Button>
          </Grid>
        );
      })
    : '';
};

export default Answers;
