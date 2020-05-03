import React from 'react'
import {connect} from 'react-redux'
import {getChannelThunk} from '../store/singleChannel'
import Users from './Users'
import ChatView from './ChatView'
import Messages from './Messages'
import {getMessagesThunk} from '../store/messages'
import socket from '../socket'

/**
 * COMPONENT
 */
class ChannelView extends React.Component {
  componentDidMount() {
    // socket.on('connect', () => {
    //   socket.emit('messageMount', this.props.match.params.channelId)

    // })
    this.props.getChannel(this.props.match.params.channelId)
    this.props.getMessages(this.props.match.params.channelId)
    // socket.on('message-broadcast', (message, id) => {
    //   this.props.getChannel(id)
    // this.props.getMessages(id)
    // })
  }
  render() {
    //console.log('channels', this.props.channel)
    return (
      <div>
        <img src={this.props.channel.image} />
        <h1>{this.props.channel.name}</h1>
        <p>{this.props.channel.description}</p>
        <div>
          <Messages />
          <Users />
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
    channel: state.channel,
    name: state.user.name,
    messages: state.messages
  }
}
const mapDispatch = dispatch => {
  return {
    getChannel: id => dispatch(getChannelThunk(id)),
    getMessages: id => dispatch(getMessagesThunk(id))
  }
}
export default connect(mapState, mapDispatch)(ChannelView)
