import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import Bar from '../bar';

type MyCartLoginProps = {};

const PERSON_PNG_PATH: string = '../../assets/person.png';

const MyCartLogin: React.FC<MyCartLoginProps> = ({navigation}) => (
  <View style={styles.centeredView}>
    <Bar
      text="My Cart"
      isSearch={true}
      isLike={false}
      isCard={false}
      navigation={navigation}
    />
    <View style={styles.centeredView}>
      <View>
        <View style={styles.imageProfile}>
          <View style={styles.imageView}>
            <Image source={require(PERSON_PNG_PATH)} />
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

export default MyCartLogin;
