import React, {Component} from 'react'

export default class LikeButton extends Component {

  render(){
    return (<button onClick={this.props.onClick}>{ this.props.numberOfLikes } likes</button>)
  }

}
