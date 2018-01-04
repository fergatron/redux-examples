const initialState = {
  "user": {
    "firstName": "Marc",
    "lastName": "Ferguson"
  }
}

function appReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default appReducer;
