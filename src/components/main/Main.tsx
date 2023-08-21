import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import ProductList from '../productList';

type MainProps = {};

const Main: React.FC<MainProps> = ({navigation}) => (
  <View style={styles.layout}>
    <ProductList navigation={navigation} />
  </View>
);

export default Main;
