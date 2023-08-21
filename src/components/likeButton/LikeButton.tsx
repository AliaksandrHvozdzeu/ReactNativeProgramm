import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';

type LikeButtonProps = {};

const LikeButton: React.FC<LikeButtonProps> = ({navigation}) => (
  <View style={styles.icon}>
    <Button
      style={styles.like}
      icon={styles.iconStyle}
      iconRight
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.containerStyle}
      onPress={() => navigation.navigate('AddProductWishModal')}
    />
  </View>
);

export default LikeButton;
