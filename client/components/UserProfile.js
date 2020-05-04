import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getSingleUserThunk} from '../store/singleUser'

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getSingleUser(this.props.match.params.userId)
  }
  render() {
    return (
      <div>
        <img src={this.props.singleUser.image} />
        <h3>{this.props.singleUser.name}</h3>
        <p>{this.props.singleUser.email}</p>
        <button type="submit">Send Friend Request</button>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    singleUser: state.singleUser
  }
}
const mapDispatch = dispatch => {
  return {
    getSingleUser: id => dispatch(getSingleUserThunk(id))
  }
}

export default connect(mapState, mapDispatch)(UserProfile)
