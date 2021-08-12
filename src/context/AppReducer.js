const AppReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_STATE':
      return {
        ...state,
        score: 0,
        questionIndex: 0,
      };
    case 'UPDATE_SCORE':
      return {
        ...state,
        score: state.score + 1,
      };
    case 'UPDATE_INDEX':
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      };
    default:
      return state;
  }
};

export default AppReducer;
