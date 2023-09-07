import 'react-native';
import React from 'react';
import {test, describe, expect} from '@jest/globals';
import TopBar from './TopBar';
import StatusBar from '../StatusBar';
import {render} from '@testing-library/react-native';

describe('TopBar tests', () => {
  test('Renders the TopBar correctly', () => {
    const tree = render(<TopBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('TopBar render works correctly', () => {
    render(<TopBar />);
  });

  test('Component TopBar presented in component', () => {
    const wrapper = render(<TopBar />);
    const testInstance = wrapper.root;
    expect(testInstance.findByType(StatusBar)).toBeTruthy();
  });
});
