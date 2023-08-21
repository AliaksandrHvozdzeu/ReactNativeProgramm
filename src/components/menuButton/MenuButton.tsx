import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';

type MenuButtonProps = {};

const MenuButton: React.FC<MenuButtonProps> = ({navigation}) => (
  <View style={styles.iconLeft}>
    <Button
      style={styles.menu}
      icon={styles.icon}
      iconRight
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.containerStyle}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  </View>
);

export default MenuButton;
