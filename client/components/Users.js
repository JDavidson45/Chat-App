import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Users = props => <div>Users:</div>

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Users)
