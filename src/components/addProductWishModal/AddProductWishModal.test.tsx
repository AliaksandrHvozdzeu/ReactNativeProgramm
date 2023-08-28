import 'react-native';
import React from 'react';
import {jest, test, describe, expect} from '@jest/globals';
import AddProductWishModal from './AddProductWishModal';
import {Image} from 'react-native';
import {SUCCESS_PNG_PATH} from '../../utils/images';
import {render} from '@testing-library/react-native';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('AddProductWishModal tests', () => {
  test('Renders the AddProductWishModal correctly', () => {
    const tree = render(<AddProductWishModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('AddProductWishModal render works correctly', () => {
    render(<AddProductWishModal />);
  });

  test('Component AddProductWishModal contains image', () => {
    const wrapper = render(<AddProductWishModal />);
    const testInstance = wrapper.root;
    const textValue = testInstance.findByType(Image);
    expect(textValue.props.source).toBe(SUCCESS_PNG_PATH);
  });
});
