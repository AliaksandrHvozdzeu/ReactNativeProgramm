import {Component} from 'react';

class ProductAttributes extends Component {
  static getSize(value: string) {
    if (!value) {
      return 'Size: N/A';
    }
    const myArray = value.split(',');
    return myArray[1].replace(' ', '');
  }

  static getExtraColor(value: string) {
    const myArray = value.split(',');
    if (myArray.length > 2) {
      return myArray[2].replace('and', '').replace('  ', '');
    }
  }

  static getColor(value: string) {
    if (!value) {
      return 'Color: N/A';
    }
    const myArray = value.split(',');
    return myArray[0];
  }
}

export default ProductAttributes;
