import React from 'react';
import {Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

type forgotPasswordProps = {
  navigation: any;
};

const ForgotPassword = ({navigation}: forgotPasswordProps) => {
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

  const onSubmit = () => {
    console.log('SUBMIT');
  };

  return (
    <View style={styles.centeredView}>
      <View style={{marginBottom: 60}}>
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
          buttonStyle={shadowStyles}
          containerStyle={{
            marginTop: 10,
            width: 300,
          }}
          onPress={onSubmit}
          title="SUBMIT"
        />
      </View>
    </View>
  );
};

export default ForgotPassword;
