import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import socket from '../socket'
import {getMessagesThunk, addMessagesThunk} from '../store/messages'

class Messages extends React.Component {
  constructor() {
    super()
    this.state = {
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.emit = this.emit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.name, event.target.value)
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('hit handle submit')
    socket.emit('message-sent', this.state, this.props.channel.id)

    socket.on('message-broadcast', (message, id) => {
      console.log('hit emit in handle submit', message, id)
      //socket.broadcast.to(room)
      //socket.emit('message-mount', this.props.channel.id)
      //this.props.getMessages(this.props.channel.id)
      this.props.addMessages(this.state, this.props.channel.id)
    })
  }

  render() {
    // console.log('message in render', this.props)
    return (
      <div>
        <p />
        <h2>Chat Messages</h2>
        <div id="chatBox">
          {this.props.messages.map(message => {
            return (
              <div
                key={message.id}
                className={
                  this.props.user.id === message.userId
                    ? 'container'
                    : 'container darker'
                }
              >
                {/* user is undefined until refresh eager load doesnt happen till page refreshed */}
                <img src={message.user.image} alt="Avatar" />
                <h6>{message.user.name}</h6>
                <p>{message.content}</p>
                <span className="time-right">{message.createdAt}</span>
              </div>
            )
          })}
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              id="chatForm"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
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
    channel: state.channel,
    messages: state.messages
  }
}

const mapDispatch = dispatch => {
  return {
    getMessages: id => dispatch(getMessagesThunk(id)),
    addMessages: (message, id) => dispatch(addMessagesThunk(message, id))
  }
}

export default connect(mapState, mapDispatch)(Messages)
