import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

const LikeButton = () => {
  return (
    <View style={styles.icon}>
      <Icon
        style={styles.like}
        type="antdesign"
        name="hearto"
        color={styles.like.color}
      />
    </View>
  );
};

export default LikeButton;
