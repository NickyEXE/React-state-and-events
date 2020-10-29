import React from 'react'

class Message extends React.Component {

  render(){
    console.log(this.props)
    this.props.thisIsAFunction && this.props.thisIsAFunction()
    return (<li> { this.props.text } </li>)
  }
}

export default Message
