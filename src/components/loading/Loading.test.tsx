import 'react-native';
import React from 'react';
import {test, describe, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import Loading from './Loading';
import {Text} from 'react-native';

describe('Loading tests', () => {
  test('Renders the Loading correctly', () => {
    const tree = render(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Loading render works correctly', () => {
    render(<Loading />);
  });

  test('Component Text presented in component', () => {
    const wrapper = render(<Loading />);
    const testInstance = wrapper.root;
    expect(testInstance.findByType(Text)).toBeTruthy();
  });

  test('Component Text is not empty', () => {
    const wrapper = render(<Loading />);
    const testInstance = wrapper.root;
    const textValue = testInstance.findByType(Text);
    expect(textValue.props.children).toBe('Loading...');
  });
});
