import {Component} from 'react';
class StringUtils extends Component {
  static shortTitle(stringValue: string) {
    const value =
      stringValue.length > 15 ? `${stringValue.slice(0, 15)}...` : stringValue;
    return value.replace(/<\/?[^>]+(>|$)/g, '');
  }

  static shortDescription(stringValue: string) {
    const value =
      stringValue.length > 20 ? `${stringValue.slice(0, 20)}...` : stringValue;
    return value.replace(/<\/?[^>]+(>|$)/g, '');
  }
}

export default StringUtils;
