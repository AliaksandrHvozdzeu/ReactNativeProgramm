import {Component} from 'react';

class ImageUtils extends Component {
  static getImageById(imageId: string) {
    return `https://picsum.photos/id/${imageId}/3670/2462`;
  }
}

export default ImageUtils;
