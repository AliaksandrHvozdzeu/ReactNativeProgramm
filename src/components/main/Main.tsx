import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import ProductList from '../productList';

type mainProps = {
  navigation: any;
};

const Main = ({navigation}: mainProps) => {
  return (
    <View style={styles.layout}>
      <ProductList navigation={navigation} />
    </View>
  );
};

export default Main;
