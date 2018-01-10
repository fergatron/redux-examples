import { ADD_USER, FETCH_USER } from '../actions';

const initialState = {
  "firstName": "Marc",
  "lastName": "Ferguson"
}

function appReducer(state = initialState, action) {
  console.info('reducer called', state, action);
  const userArray = [];

  switch(action.type) {
    case ADD_USER:
      userArray.push(state, action.payload);

      return Object.assign({}, action.payload, {
        "users": userArray
      });
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}

export default appReducer;
