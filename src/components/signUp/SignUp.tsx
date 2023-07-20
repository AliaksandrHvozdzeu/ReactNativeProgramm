import React from 'react';
import {Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

type signUpProps = {
  navigation: any;
};

const SignUp = ({navigation}: signUpProps) => {
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
      <View style={{marginBottom: 60}}>
        <Text style={styles.text}>Ecommerce Store</Text>
      </View>
      <View>
        <View>
          <Text style={styles.inputName}>Full Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.inputName}>Email Address</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.inputName}>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View>
          <Text style={styles.inputName}>Confirm password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
      </View>
      <View>
        <Button
          buttonStyle={shadowStyles}
          containerStyle={{
            marginTop: 10,
            width: 300,
          }}
          onPress={() => navigation.goBack()}
          title="SIGN UP"
        />
      </View>
      <View>
        <Text style={styles.link} onPress={() => navigation.navigate('LogIn')}>
          Already have account? Sign in
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
