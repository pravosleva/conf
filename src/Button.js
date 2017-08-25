import React, { Component } from 'react';

class Button extends Component {
  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick() { this.props.handlerClick() }
  render() {
    return (
      <button onClick={this.handlerClick}>
        {this.props.tmp?` ${this.props.tmp}`:``}
      </button>
    );
  }
}

export default Button;