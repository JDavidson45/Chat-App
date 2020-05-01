import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMessagesThunk, addMessagesThunk} from '../store/messages'
class Messages extends React.Component {
  constructor() {
    super()
    this.state = {
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(event.target.name, event.target.value)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.addMessages(this.state, this.props.channel.id)
    this.setState({
      content: ''
    })
  }

  render() {
    console.log('message in render', this.props.messages)
    return (
      <div>
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
                <img src={this.props.user.image} alt="Avatar" />
                <h6>{message.user ? message.user.name : 'me'}</h6>
                <p>{message.content}</p>
                <span className="time-right">{message.createdAt}</span>
              </div>
            )
          })}
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
