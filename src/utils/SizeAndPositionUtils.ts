import {Component} from 'react';
import {Dimensions} from 'react-native';

class SizeAndPositionUtils extends Component {
  static heightPosition(height: number) {
    return (
      Dimensions.get('screen').height -
      Math.floor(Dimensions.get('screen').height / 100) * height
    );
  }
}

export default SizeAndPositionUtils;
