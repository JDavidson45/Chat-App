import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Messages = props => (
  <div>
    Chat
    <div>
      new message:
      <input />
      <button type="submit">Submit</button>
    </div>
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

export default connect(mapState)(Messages)
