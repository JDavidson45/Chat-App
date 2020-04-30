import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMessagesThunk} from '../store/messages'
class Messages extends React.Component {
  constructor() {
    super()
  }
  render() {
    console.log('message in render', this.props.message)
    return (
      <div>
        <h2>Chat Messages</h2>
        <div id="chatBox">
          {/* {this.props.messages.map(message => {
            return(
            <div key={message.id} className={this.props.user === message.userId ?"container" : "container darker"}>
            <img src={this.props.user.image} alt="Avatar" />
            <p>{this.props.message.content}</p>
            <span className="time-right">{this.props.message.createdAt}</span>
          </div>)
          })} */}
          <div className="container">
            <img
              src="https://jennywilliamsonline.files.wordpress.com/2018/12/image-2-1.png?w=770"
              alt="Avatar"
            />
            <p>Hello. How are you today?</p>
            <span className="time-right">11:00</span>
          </div>
          <div className="container darker">
            <img src={this.props.user.image} alt="Avatar" className="right" />
            <p>{this.props.messages.content}</p>
            <span className="time-left">11:01</span>
          </div>
        </div>

        <div>
          <form>
            <textarea id="chatForm" />
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

// const mapDispatch = (dispatch) => {
//   return {
//     getMessages: (id) => dispatch(getMessagesThunk(id))
//   }
// }

export default connect(mapState)(Messages)
