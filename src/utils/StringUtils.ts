import {Component} from 'react';
class StringUtils extends Component {
  static shortString(stringValue: string, length: number) {
    const value =
      stringValue.length > length
        ? `${stringValue.slice(0, length)}...`
        : stringValue;
    return value.replace(/<\/?[^>]+(>|$)/g, '');
  }

  static replaceTags(stringValue: string) {
    return stringValue.replace(/<\/?[^>]+(>|$)/g, '');
  }
}

export default StringUtils;
