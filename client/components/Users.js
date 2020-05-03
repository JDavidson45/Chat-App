import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getChannelThunk} from '../store/singleChannel'

class Users extends React.Component {
  // componentDidMount() {
  //   this.props.getChannel(this.props.channel.id)
  //   this.props.getMessages(this.props.match.params.channelId)
  // }
  render() {
    console.log('channel in user', this.props.channel)
    return (
      <div id="users">
        Users:
        <div id="subUsers">
          {console.log('under', this.props.channel.user)}
          {this.props.channel.users
            ? this.props.channel.users.map(user => {
                return (
                  <div className="containerImg" key={user.id}>
                    <img className="avatar" src={user.image} alt="Avatar" />
                    <p>{user.name}</p>
                  </div>
                )
              })
            : 'loading'}
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
    channel: state.channel
  }
}
const mapDispatch = dispatch => {
  return {
    getChannel: id => dispatch(getChannelThunk(id))
    //getMessages: id => dispatch(getMessagesThunk(id))
  }
}

export default connect(mapState, mapDispatch)(Users)
