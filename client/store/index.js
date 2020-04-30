import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import messageReducer from './messages'
import usersReducer from './users'
import channelsReducer from './channel'
import channelReducer from './singleChannel'

const reducer = combineReducers({
  user,
  messages: messageReducer,
  users: usersReducer,
  channels: channelsReducer,
  channel: channelReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
