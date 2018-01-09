import React, { Component } from 'react';
import AnimationButton from '../components/Buttons/animationButton'
import Welcome from '../components/welcome/welcome'
import Card from '../components/card/card'
import './happy.css';

class happy extends Component {
  render() {
    var content = ["Let's see.. .", "You’re never around, you", "hate the music I’m into, you", "practically despise the movies I", "like, and yet somehow you still", "manage to be the best dad every year.", "How do you do that? :)"],
        end = ["陈安一♥孙文嘉"];
    return (
      <div className="Us">
          <Card img="https://image.ibb.co/fYzTrb/lastofus.jpg"
            title="婚礼请柬"
            subtitle="(2.25 文苑酒店)"
            content={content}
            end={end}
          />
          {/* <Welcome /> */}
          {/* <AnimationButton content="testtesttesttesttest" btnName="btnName" /> */}
      </div>
    );
  }
}

export default happy;
