import './styles.css';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

import { GlobalProvider } from './context/GlobalState';
import Questionaire from './components/Questionaire';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const API_LINK = 'https://opentdb.com/api.php?amount=10';

export default function App() {
  const classes = useStyles();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_LINK)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  return (
    <GlobalProvider className={classes.root}>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center',
        }}
      >
        <Questionaire questions={questions} />
      </Container>
    </GlobalProvider>
  );
}
