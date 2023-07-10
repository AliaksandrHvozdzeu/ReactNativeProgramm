import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

const MenuButton = () => {
  return (
    <View style={styles.iconLeft}>
      <Icon
        style={styles.menu}
        type="feather"
        name="menu"
        color={styles.menu.color}
      />
    </View>
  );
};

export default MenuButton;
