import React, { Component } from 'react';
import './animationButton.css';

class AnimationButton extends Component {
  render() {
    var content = this.props.content,
        btnName = this.props.btnName;
    return (
      <div className="animationButton">
        <div className="button">
          {content}
        </div>
        <div className="cover">
          <div className="innie">{btnName}</div>
          <div className="spine"></div>
          <div className="outie">{btnName}</div>
        </div>
        <div className="shadow"></div>
      </div>
    );
  }
}


export default AnimationButton;
