import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import ProductList from '../productList';

type MainProps = {};

const Main: React.FC<MainProps> = () => {
  return (
    <View style={styles.layout}>
      <ProductList />
    </View>
  );
};

export default Main;
