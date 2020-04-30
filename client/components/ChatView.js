import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Users from './Users'
import Messages from './Messages'

const ChatView = props => (
  <div>
    <Users />
    <Messages />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(ChatView)
