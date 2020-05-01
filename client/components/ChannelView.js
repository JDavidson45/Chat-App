import React from 'react'
import {connect} from 'react-redux'
import {getChannelThunk} from '../store/singleChannel'
import Users from './Users'
import ChatView from './ChatView'
import Messages from './Messages'
import {getMessagesThunk} from '../store/messages'

/**
 * COMPONENT
 */
class ChannelView extends React.Component {
  componentDidMount() {
    this.props.getChannel(this.props.match.params.channelId)
    this.props.getMessages(this.props.match.params.channelId)
  }
  render() {
    console.log('channels', this.props.channel)
    return (
      <div>
        <img src={this.props.channel.image} />
        <h1>{this.props.channel.name}</h1>
        <p>{this.props.channel.description}</p>
        <div>
          <Users />
          <Messages />
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
