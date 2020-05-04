import axios from 'axios'
const GET_FRIENDS = 'GET_friends'

export const getfriends = friends => {
  return {
    type: GET_FRIENDS,
    friends
  }
}
export const getFriendsThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/friends')
      dispatch(getfriends(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = []
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return action.friends
    default:
      return state
  }
}
export default friendsReducer
