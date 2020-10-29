import React from 'react'

class Message extends React.Component {

  render(){
  return (<li> { this.props.text } <button>Likes {this.props.numberOfLikes}</button> </li>)
  }
}

export default Message
