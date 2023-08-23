import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import Bar from '../bar';
import {useNavigation} from '@react-navigation/native';
import {GOOD_PNG_PATH} from '../../utils/images';

type MyOrderLoginProps = {};

const MyOrderLogin: React.FC<MyOrderLoginProps> = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Bar text="My Orders" isSearch={true} isLike={false} isCard={false} />
      <View style={styles.centeredView}>
        <View>
          <View style={styles.imageProfile}>
            <View style={styles.imageView}>
              <Image source={GOOD_PNG_PATH} />
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
            buttonStyle={styles.ios}
            containerStyle={styles.containerStyle}
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

export default MyOrderLogin;
