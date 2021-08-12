import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  score: 0,
  questionIndex: 0,
};

// Create context
export const GlobalContext = createContext(initialState);

// Create provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const updateScore = () => {
    dispatch({
      type: 'UPDATE_SCORE',
    });
  };
  const updateIndex = () => {
    dispatch({
      type: 'UPDATE_INDEX',
    });
  };
  const resetState = () => {
    dispatch({
      type: 'RESET_STATE',
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        score: state.score,
        questionIndex: state.questionIndex,
        updateIndex,
        updateScore,
        resetState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
