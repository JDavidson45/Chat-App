import axios from 'axios'
const GET_CHANNELS = 'GET_CHANNELS'
const MESSAGE_RECIEVED = 'MESSAGE_RECIEVED'

let nextMessageId = 0

export const getChannels = channels => {
  return {
    type: GET_CHANNELS,
    channels
  }
}
export const getChannelsThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/channels')
      dispatch(getChannels(data))
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
const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return action.channels[0].channels
    case MESSAGE_RECIEVED:
      return state.concat([
        {message: action.message, author: action.author, id: action.id}
      ])
    default:
      return state
  }
}
export default channelsReducer
