import axios from 'axios'
const GET_CHANNEL = 'GET_CHANNEL'

export const getChannel = channel => {
  return {
    type: GET_CHANNEL,
    channel
  }
}
export const getChannelThunk = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/channels/${id}`)
      console.log('data!', data)
      dispatch(getChannel(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {}
const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANNEL:
      return action.channel
    default:
      return state
  }
}
export default channelReducer
