import axios from 'axios'
const GET_SINGLE_USER = 'GET_SINGLE_USER'
const MESSAGE_RECIEVED = 'MESSAGE_RECIEVED'

export const getUser = user => {
  return {
    type: GET_SINGLE_USER,
    user
  }
}
export const getSingleUserThunk = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/users/${id}`)
      dispatch(getUser(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {}
const singleUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.user
    default:
      return state
  }
}
export default singleUserReducer
