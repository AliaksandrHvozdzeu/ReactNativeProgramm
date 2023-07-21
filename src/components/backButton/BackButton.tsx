import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../utils/colors';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.iconLeft}>
      <Button
        style={styles.back}
        icon={{
          name: 'arrow-back',
          type: 'ionicons',
          size: 25,
          color: 'white',
        }}
        iconRight
        buttonStyle={{
          backgroundColor: COLORS.blue_500,
          marginTop: 2,
        }}
        containerStyle={{
          height: 40,
          width: 45,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default BackButton;
