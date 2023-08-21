import {Component} from 'react';
import {Dimensions} from 'react-native';

class SizeAndPositionUtils extends Component {
  static androidButtonPosition() {
    return (
      Dimensions.get('screen').height -
      Math.floor(Dimensions.get('screen').height / 100) * 80
    );
  }

  static iosButtonPosition() {
    return (
      Dimensions.get('screen').height -
      Math.floor(Dimensions.get('screen').height / 100) * 85
    );
  }

  static addToCartIOSButtonPosition() {
    return (
      Dimensions.get('screen').height -
      Math.floor(Dimensions.get('screen').height / 100) * 105
    );
  }

  static addToCartAndroidButtonPosition() {
    return (
      Dimensions.get('screen').height -
      Math.floor(Dimensions.get('screen').height / 100) * 105
    );
  }

  static ProcessToPaymentButtonPosition() {
    return (
      Dimensions.get('screen').height -
      Math.floor(Dimensions.get('screen').height / 100) * 110
    );
  }
}

export default SizeAndPositionUtils;
