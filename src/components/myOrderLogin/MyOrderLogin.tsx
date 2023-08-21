import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import Bar from '../bar';

type MyOrderLoginProps = {};

const MyOrderLogin: React.FC<MyOrderLoginProps> = ({navigation}) => (
  <View style={styles.centeredView}>
    <Bar
      text="My Orders"
      isSearch={true}
      isLike={false}
      isCard={false}
      navigation={navigation}
    />
    <View style={styles.centeredView}>
      <View>
        <View style={styles.imageProfile}>
          <View style={styles.imageView}>
            <Image source={require('../../assets/good.png')} />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.modalText}>Login First!</Text>
      </View>
      <Text style={styles.modalDescription}>Login first to view your cart</Text>
      <View>
        <Button
          buttonStyle={Platform.select({
            ios: styles.ios,
            android: styles.android,
          })}
          containerStyle={styles.containerStyle}
          onPress={() => navigation.navigate('LogIn')}
          title="LOGIN NOW"
        />
      </View>
      <View>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          New here? Sign Up
        </Text>
      </View>
    </View>
  </View>
);

export default MyOrderLogin;
