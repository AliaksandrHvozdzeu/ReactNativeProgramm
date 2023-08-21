import React from 'react';
import {Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';

type ForgotPasswordProps = {};

const onSubmit = () => {};

const ForgotPassword: React.FC<ForgotPasswordProps> = () => (
  <View style={styles.centeredView}>
    <View style={styles.label}>
      <Text style={styles.text}>Ecommerce Store</Text>
    </View>
    <View style={styles.forgotDescriptionView}>
      <Text style={styles.forgotDescription}>
        Enter your email id and we will send you an email to change the password
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
        buttonStyle={Platform.select({
          ios: styles.ios,
          android: styles.android,
        })}
        containerStyle={styles.containerStyle}
        onPress={onSubmit}
        title="SUBMIT"
      />
    </View>
  </View>
);

export default ForgotPassword;
