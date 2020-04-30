import axios from 'axios'
const GET_MESSAGES = 'GET_MESSAGES'
const MESSAGE_RECIEVED = 'MESSAGE_RECIEVED'

let nextMessageId = 0

export const getMessages = messages => {
  return {
    type: GET_MESSAGES,
    messages
  }
}
export const getMessagesThunk = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/messages/${id}`)
      dispatch(getMessages(data))
    } catch (err) {
      console.log(err)
    }
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
    case GET_MESSAGES:
      return action.messages
    case MESSAGE_RECIEVED:
      return state.concat([
        {message: action.message, author: action.author, id: action.id}
      ])
    default:
      return state
  }
}
export default messageReducer
