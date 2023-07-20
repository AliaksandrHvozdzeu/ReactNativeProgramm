import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.iconLeft}>
      <Icon
        style={styles.menu}
        type="ionicons"
        name="arrow-back"
        color={styles.menu.color}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default BackButton;
