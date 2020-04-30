const ADD_MESSAGE = 'ADD_MESSAGE'
const MESSAGE_RECIEVED = 'MESSAGE_RECIEVED'

let nextMessageId = 0

export const addMessage = (message, author) => {
  return {
    type: ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
  }
}

export const messageRecieved = name => {
  return {
    type: MESSAGE_RECIEVED,
    id: nextMessageId++,
    name
  }
}

const initialState = []
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return state.concat([
        {message: action.message, author: action.author, id: action.id}
      ])
    case MESSAGE_RECIEVED:
      return state.concat([
        {message: action.message, author: action.author, id: action.id}
      ])
    default:
      return state
  }
}
export default messageReducer
