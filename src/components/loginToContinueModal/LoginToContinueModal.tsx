import React, {useCallback} from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {WARNING_PNG_PATH} from '../../utils/images';

type LoginToContinueModalProps = {};

const LoginToContinueModal: React.FC<LoginToContinueModalProps> = () => {
  const navigation = useNavigation();

  const onLogIn = useCallback(() => {
    navigation.navigate('LogIn');
  }, []);

  const onSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, []);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View>
          <Image source={WARNING_PNG_PATH} />
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
            buttonStyle={Platform.select({
              ios: styles.ios,
              android: styles.android,
            })}
            containerStyle={styles.containerStyle}
            onPress={onLogIn}
            title="LOGIN"
          />
          <View style={styles.split} />
          <Button
            buttonStyle={Platform.select({
              ios: styles.ios,
              android: styles.android,
            })}
            containerStyle={styles.containerStyle}
            onPress={onSignUp}
            title="SIGN UP"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginToContinueModal;
