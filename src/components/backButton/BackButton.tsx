import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';

type BackButtonProps = {};

const BackButton: React.FC<BackButtonProps> = ({navigation}) => (
  <View style={styles.iconLeft}>
    <Button
      style={styles.back}
      icon={styles.icon}
      iconRight
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.containerStyle}
      onPress={() => navigation.goBack()}
    />
  </View>
);

export default BackButton;
