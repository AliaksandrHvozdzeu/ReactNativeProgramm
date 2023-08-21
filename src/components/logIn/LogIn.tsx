import React from 'react';
import {Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

type LogInProps = {};

const LogIn = ({route}: LogInProps) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const {authContext} = route.params;

  const setAuthData = () => {
    authContext.signIn({username, password});
    navigation.navigate('Root');
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.label}>
        <Text style={styles.text}>Ecommerce Store</Text>
      </View>
      <View>
        <View>
          <Text style={styles.inputName}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View>
          <Text style={styles.inputName}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <Text
            style={styles.forgotPasswordLink}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </Text>
        </View>
      </View>
      <View>
        <Button
          buttonStyle={Platform.select({
            ios: styles.ios,
            android: styles.android,
          })}
          containerStyle={styles.containerStyle}
          onPress={() => setAuthData()}
          title="SIGN IN"
        />
      </View>
      <View>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          New here? Sign Up
        </Text>
      </View>
      <View style={[styles.buttonViewStyle, styles.iosButtonPosition]}>
        <Button
          title="SKIP LOGIN"
          icon={styles.icon}
          iconRight
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.container}
          titleStyle={styles.titleStyle}
          onPress={() => navigation.navigate('Root')}
        />
      </View>
    </View>
  );
};

export default LogIn;
