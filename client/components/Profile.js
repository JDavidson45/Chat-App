import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Profile = props => <div>hello {props.name}</div>

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    name: state.user.name
  }
}

export default connect(mapState)(Profile)
