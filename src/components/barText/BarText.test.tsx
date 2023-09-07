import 'react-native';
import React from 'react';
import {test, describe, expect} from '@jest/globals';
import BarText from './BarText';
import {render} from '@testing-library/react-native';

describe('BarText tests', () => {
  test('Renders the Footer correctly', () => {
    const tree = render(<BarText text={text} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const text = 'test';
  test('BarText render works correctly', () => {
    render(<BarText text={text} />);
  });
});
