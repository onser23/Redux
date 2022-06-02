const INITIAL_STATE = {
  name: 'Samad',
  age: 17,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload};

    case 'SET_AGE':
      return {...state, age: action.payload};

    default:
      return state;
  }
};
