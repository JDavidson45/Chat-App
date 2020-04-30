import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Profile = props => <div>hello {props.email}</div>

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Profile)
