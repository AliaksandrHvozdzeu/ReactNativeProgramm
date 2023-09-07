import 'react-native';
import React from 'react';
import {test, describe, expect} from '@jest/globals';
import LikeButton from './LikeButton';
import {render} from '@testing-library/react-native';

describe('LikeButton tests', () => {
  test('Renders the LikeButton correctly', () => {
    const tree = render(<LikeButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('LikeButton render works correctly', () => {
    render(<LikeButton />);
  });
});
