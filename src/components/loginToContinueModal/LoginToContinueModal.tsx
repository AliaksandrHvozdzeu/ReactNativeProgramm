import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';

type LoginToContinueModalProps = {};

const WARNING_PNG_PATH: string = '../../assets/warning.png';

const LoginToContinueModal: React.FC<LoginToContinueModalProps> = ({
  navigation,
}) => (
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <View>
        <Image source={require(WARNING_PNG_PATH)} />
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
          onPress={() => navigation.navigate('LogIn')}
          title="LOGIN"
        />
        <View style={styles.split} />
        <Button
          buttonStyle={Platform.select({
            ios: styles.ios,
            android: styles.android,
          })}
          containerStyle={styles.containerStyle}
          onPress={() => navigation.navigate('SignUp')}
          title="SIGN UP"
        />
      </View>
    </View>
  </View>
);

export default LoginToContinueModal;
