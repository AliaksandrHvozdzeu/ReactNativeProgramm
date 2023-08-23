import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {DrawerActions, useNavigation} from '@react-navigation/native';

type MenuButtonProps = {};

const MenuButton: React.FC<MenuButtonProps> = () => {
  const navigation = useNavigation();
  return (
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
};

export default MenuButton;
