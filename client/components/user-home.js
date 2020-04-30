import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getChannelsThunk} from '../store/channel'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
export class UserHome extends React.Component {
  componentDidMount() {
    this.props.getChannels()
  }
  render() {
    return (
      <div>
        <h3>Welcome, {this.props.name}</h3>
        <h2>Your Channels:</h2>
        {this.props.channels.map(channel => {
          return (
            <div key={channel.id}>
              <Link to={`/channels/${channel.id}`}>
                <img src={channel.image} />
                <p>{channel.name}</p>
              </Link>
              <p>{channel.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    channels: state.channels,
    name: state.user.name
  }
}
const mapDispatch = dispatch => {
  return {
    getChannels: () => dispatch(getChannelsThunk())
  }
}
export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  name: PropTypes.string
}
