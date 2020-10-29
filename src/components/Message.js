import React from 'react'

class Message extends React.Component {

  render(){
    console.log(this.props)
  return (<li> { this.props.text } <button>{ this.props.numberOfLikes } likes</button> </li>)
  }
}

export default Message
