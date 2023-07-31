import React from 'react';
import {Dimensions, Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

type logInProps = {
  route: any;
  navigation: any;
};

const LogIn = ({route, navigation}: logInProps) => {
  const [username, setUsername] = React.useState(
    'hvozdzeu.aliaksandr@gmail.com',
  );
  const [password, setPassword] = React.useState('250486al');

  const {authContext} = route.params;

  const setAuthData = () => {
    authContext.signIn({username, password});
    navigation.navigate('Root');
  };

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

  const ADD_TO_CART_BUTTON_POSITION_IOS =
    Dimensions.get('screen').height -
    Math.floor(Dimensions.get('screen').height / 100) * 105;
  const ADD_TO_CART_BUTTON_POSITION_ANDROID =
    Dimensions.get('screen').height -
    Math.floor(Dimensions.get('screen').height / 100) * 95;

  const addToCarButtonStyle = Platform.select({
    ios: {
      bottom: ADD_TO_CART_BUTTON_POSITION_IOS,
    },
    android: {
      bottom: ADD_TO_CART_BUTTON_POSITION_ANDROID,
    },
  });

  return (
    <View style={styles.centeredView}>
      <View style={{marginBottom: 60}}>
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
          buttonStyle={shadowStyles}
          containerStyle={{
            marginTop: 10,
            width: 300,
          }}
          onPress={() => setAuthData()}
          title="SIGN IN"
        />
      </View>
      <View>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          New here? Sign Up
        </Text>
      </View>
      <View style={[styles.buttonViewStyle, addToCarButtonStyle]}>
        <Button
          title="SKIP LOGIN"
          icon={{
            name: 'arrowright',
            type: 'antdesign',
            size: 15,
            color: 'white',
          }}
          iconRight
          buttonStyle={{
            backgroundColor: COLORS.neutral_500,
            borderRadius: 3,
            shadowColor: COLORS.neutral_700,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 2,
            shadowRadius: 4,
          }}
          containerStyle={{
            height: 40,
            width: 300,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{marginHorizontal: 20, color: COLORS.neutral_100}}
          onPress={() => navigation.navigate('Root')}
        />
      </View>
    </View>
  );
};

export default LogIn;
