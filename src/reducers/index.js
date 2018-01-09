import { FETCH_USER } from '../actions';

const initialState = {
  "user": {
    "firstName": "Marc",
    "lastName": "Ferguson"
  }
}

function appReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER:
      console.log('fetching', state);
      return action.payload;
    default:
      return state;
  }
}

export default appReducer;
