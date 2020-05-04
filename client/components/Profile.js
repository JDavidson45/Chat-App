import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getFriendsThunk} from '../store/friends'

class Profile extends React.Component {
  componentDidMount() {
    this.props.getFriends()
  }
  render() {
    return (
      <div>
        <img src={this.props.user.image} />
        <h3>{this.props.user.name}</h3>
        <p>{this.props.user.email}</p>
        <div>
          Friends:
          {this.props.friends.map(friend => {
            return (
              <div className="conatainerImg" key={friend.id}>
                <Link to={`/users/${friend.user.id}`}>
                  <img className="avatar" src={friend.user.image} />
                  <p>{friend.user.name}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    friends: state.friends
  }
}

const mapDispatch = dispatch => {
  return {
    getFriends: () => dispatch(getFriendsThunk())
  }
}

export default connect(mapState, mapDispatch)(Profile)
