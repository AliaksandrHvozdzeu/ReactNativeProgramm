import React from 'react';
import {View} from 'react-native';
import TopBar from '../topBar';
import {styles} from './styles';
import ProductList from '../productList';

type mainProps = {
  navigation: any;
};

const Main = ({navigation}: mainProps) => {
  return (
    <View style={styles.layout}>
      <TopBar />
      <ProductList navigation={navigation} />
    </View>
  );
};

export default Main;
