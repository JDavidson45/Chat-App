import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMessagesThunk} from '../store/messages'
class Messages extends React.Component {
  constructor() {
    super()
    //this.currentTime = this.currentTime.bind(this)
  }
  // currentTime(createdAt) {

  // }
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
                <h6>{message.user.name}</h6>
                <p>{message.content}</p>
                <span className="time-right">{message.createdAt}</span>
              </div>
            )
          })}
          <div>
            <form>
              <textarea id="chatForm" />
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

// const mapDispatch = (dispatch) => {
//   return {
//     getMessages: (id) => dispatch(getMessagesThunk(id))
//   }
// }

export default connect(mapState)(Messages)
