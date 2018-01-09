import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    var img = this.props.img,
        title = this.props.title,
        subtitle = this.props.subtitle,
        content = this.props.content,
        end = this.props.end;
    return (
      <div class="card">
        <div class="imgBox">
          <div class="bark"></div>
          <img src={img} />
        </div>
        <div class="details">
          <h4 class="color1">{title}</h4>
          <h4 class="color2 margin">{subtitle}</h4>
          {
            this.props.content.map((item, index) => {
              return (
                <p key={index}>{item}</p>
              );
            })
          }
          {
            this.props.end.map((item, index) => {
              return (
                <p key={index} class="text-right">{item}</p>
              );
            })
          }
        </div>
      </div>
    );
  }
}


export default Card;
