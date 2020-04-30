const ADD_USER = 'ADD_USER'
const USER_LIST = 'USER_LIST'

let nextUserId = 0

export const addUser = name => {
  return {
    type: ADD_USER,
    id: nextUserId++,
    name
  }
}

export const usersList = users => {
  return {
    type: USER_LIST,
    users
  }
}
const initialState = []
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat([{name: action.name, id: action.id}])
    case USER_LIST:
      return action.users
    default:
      return state
  }
}
export default usersReducer
