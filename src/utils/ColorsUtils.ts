import {Component} from 'react';
import {COLORS} from './colors';

class ColorsUtils extends Component {
  static getButtonColorTitle(title: string) {
    return title.replace('_', ' ');
  }

  static getButtonColor(color: string) {
    return {
      backgroundColor: color,
      borderRadius: 0,
      flex: 1,
      height: 30,
      width: 60,
    };
  }

  static getColorButtonTitleStyle(colorName: string) {
    return colorName === 'white'
      ? {
          color: COLORS.neutral_1000,
          fontSize: 10,
        }
      : {
          fontSize: 10,
        };
  }
}

export default ColorsUtils;
