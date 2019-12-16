import React, {Component} from 'react';
import {ImageBackground} from 'react-native';

import bgSrc from '../assets/loginImage.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={{ width: "100%", height: "100%", flex: 1 }} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}