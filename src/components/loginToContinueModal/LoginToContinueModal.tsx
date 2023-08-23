import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

type loginToContinueModalProps = {
  navigation: any;
};

const LoginToContinueModal = ({navigation}: loginToContinueModalProps) => {
  const shadowStyles = Platform.select({
    ios: {
      shadowColor: COLORS.neutral_700,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 2,
      shadowRadius: 4,
      backgroundColor: COLORS.blue_500,
      borderRadius: 3,
      zIndex: 1,
    },
    android: {
      shadowColor: COLORS.neutral_700,
      shadowRadius: 4,
      elevation: 10,
      backgroundColor: COLORS.blue_500,
      borderRadius: 3,
      zIndex: 1,
    },
  });

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View>
          <Image source={require('../../assets/warning.png')} />
        </View>
        <View>
          <Text style={styles.modalText}>Login To Continue</Text>
        </View>
        <View>
          <Text style={styles.modalDescription}>
            Please login to add product in your cart
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            buttonStyle={shadowStyles}
            containerStyle={{
              marginTop: 10,
              width: 120,
            }}
            onPress={() => navigation.navigate('LogIn')}
            title="LOGIN"
          />
          <View style={styles.split} />
          <Button
            buttonStyle={shadowStyles}
            containerStyle={{
              marginTop: 10,
              width: 120,
            }}
            onPress={() => navigation.navigate('SignUp')}
            title="SIGN UP"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginToContinueModal;
