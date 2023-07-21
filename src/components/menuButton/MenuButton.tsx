import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

type menuButtonProps = {
  navigation: any;
};

const MenuButton = ({navigation}: menuButtonProps) => {
  return (
    <View style={styles.iconLeft}>
      <Button
        style={styles.menu}
        icon={{
          name: 'menu',
          type: 'feather',
          size: 20,
          color: 'white',
        }}
        iconRight
        buttonStyle={{
          backgroundColor: COLORS.blue_500,
          zIndex: 1,
          marginTop: 2,
        }}
        containerStyle={{
          height: 40,
          width: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default MenuButton;
