import React from 'react';
import {Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = ({navigation}) => (
  <View style={styles.centeredView}>
    <View style={styles.label}>
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
        buttonStyle={Platform.select({
          ios: styles.ios,
          android: styles.android,
        })}
        containerStyle={styles.containerStyle}
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

export default SignUp;
