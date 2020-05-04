import axios from 'axios'
const GET_MESSAGES = 'GET_MESSAGES'
const ADD_MESSAGE = 'ADD_MESSAGE'

let nextMessageId = 0

export const getMessages = messages => {
  return {
    type: GET_MESSAGES,
    messages
  }
}
export const addMessage = message => {
  return {
    type: ADD_MESSAGE,
    message
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
export const addMessagesThunk = (message, id) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/channels/${id}`, message)
      console.log('message in data', data, id)
      dispatch(addMessage(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = []
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages.sort(function(a, b) {
        return a.id - b.id
      })
    case ADD_MESSAGE:
      return [...state, action.message]
    default:
      return state
  }
}
export default messageReducer
