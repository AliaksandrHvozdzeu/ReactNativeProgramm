import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import {useNavigation} from '@react-navigation/native';

type ForgotPasswordProps = {};

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const navigation = useNavigation();

  const onPress = async () => {
    try {
      await SecureStore.deleteItemAsync('secure_token');
      navigation.navigate('LogIn');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.label}>
        <Text style={styles.text}>Ecommerce Store</Text>
      </View>
      <View style={styles.forgotDescriptionView}>
        <Text style={styles.forgotDescription}>
          Enter your email id and we will send you an email to change the
          password
        </Text>
      </View>
      <View>
        <View>
          <Text style={styles.inputName}>Email Address</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View>
        <Button
          buttonStyle={styles.ios}
          containerStyle={styles.containerStyle}
          onPress={onPress}
          title="SUBMIT"
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
