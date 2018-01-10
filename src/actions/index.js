export const ADD_USER = 'add_user';
export const FETCH_USER = 'fetch_user';
export const REPLACE_USER = 'replace_user';

// this function appends to the store
export function addUser(first, last = 'Macavoy') {
  return {
    type: ADD_USER,
    payload: {
      "firstName": first,
      "lastName": last
    }
  }
}

export function fetchUser() {
  return {
    type: FETCH_USER,
    payload: {
      "firstName": "John",
      "lastName": "Smith"
    }
  }
}

// this function replaces the store
export function replaceUser() {

}
