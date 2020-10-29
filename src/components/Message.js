import React from 'react'
import LikeButton from './LikeButton'

class Message extends React.Component {

  // state = {
  //   numberOfLikes: 6
  // }

  constructor(){
    super()
    this.state = {
      numberOfLikes: 4,
      potato: "batman"
    }
  }

  onClick = (e) => {
    this.setState({numberOfLikes: this.state.numberOfLikes + 1})
  }

  render(){
    console.log("in the render", this.state)
    const {text} = this.props

    return (<li> { text } <LikeButton numberOfLikes={this.state.numberOfLikes} onClick={this.onClick}/> </li>)
  }
}

export default Message
