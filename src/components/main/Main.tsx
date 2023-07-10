import React from 'react';
import {View} from 'react-native';
import TopBar from '../topBar';
import {styles} from './styles';
import ProductList from '../productList';

const Main = () => {
  return (
    <View style={styles.main}>
      <TopBar />
      <ProductList />
    </View>
  );
};

export default Main;
