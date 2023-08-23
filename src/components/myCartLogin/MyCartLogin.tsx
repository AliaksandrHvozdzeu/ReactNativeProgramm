import React from 'react';
import {Image, Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import {Button} from 'react-native-elements';
import Bar from '../bar';
import LogIn from "../logIn";

type myCartLoginProps = {
  navigation: any;
};

const MyCartLogin = ({navigation}: myCartLoginProps) => {
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
      <Bar
        text="My Cart"
        isSearch={true}
        isLike={false}
        style={shadowStyles}
        isCard={false}
        navigation={navigation}
      />
      <View style={styles.centeredView}>
        <View>
          <View style={styles.imageProfile}>
            <View style={styles.imageView}>
              <Image source={require('../../assets/person.png')} />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.modalText}>Login First!</Text>
        </View>
        <Text style={styles.modalDescription}>
          Login first to view your cart
        </Text>
        <View>
          <Button
            buttonStyle={shadowStyles}
            containerStyle={{
              marginTop: 10,
              width: 300,
            }}
            onPress={() => navigation.navigate('LogIn')}
            title="LOGIN NOW"
          />
        </View>
        <View>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('SignUp')}>
            New here? Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MyCartLogin;
