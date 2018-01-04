export function fetchUser() {
  return {
    type: 'FETCH_USER',
    payload: {
      "user": {
        "firstName": "John",
        "lastName": "Smith"
      }
    }
  }
}
