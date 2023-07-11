import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

const BackButton = () => {
  return (
    <View style={styles.iconLeft}>
      <Icon
        style={styles.menu}
        type="ionicons"
        name="arrow-back"
        color={styles.menu.color}
      />
    </View>
  );
};

export default BackButton;
