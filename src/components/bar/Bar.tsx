import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MenuButton from '../menuButton';
import CartButton from '../cartButton';
import BarText from '../barText';

const Bar = () => {
  return (
    <View style={styles.layout}>
      <View style={styles.bar}>
        <MenuButton />
        <BarText />
        <CartButton />
      </View>
    </View>
  );
};

export default Bar;
