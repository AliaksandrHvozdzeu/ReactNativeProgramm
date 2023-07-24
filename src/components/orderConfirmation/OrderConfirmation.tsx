import React from 'react';
import {Image, Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import {Button} from 'react-native-elements';
import Bar from '../bar';
import LogIn from '../logIn';

type orderConfirmationProps = {
  navigation: any;
};

const OrderConfirmation = ({navigation}: orderConfirmationProps) => {
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
      <View style={styles.centeredView}>
        <View style={{width: '90%'}}>
          <Text style={styles.text}>Order Confirmation</Text>
        </View>
        <View>
          <View style={styles.imageProfile}>
            <View style={styles.imageView}>
              <Image source={require('../../assets/good.png')} />
            </View>
          </View>
        </View>
        <View style={{width: '90%'}}>
          <Text style={styles.modalText}>
            Thank you for placing your order with us!
          </Text>
        </View>
        <View style={{width: '70%'}}>
          <Text style={styles.modalDescription}>
            Please check your email for more details. For any questions and
            further information please contact our customer support.
          </Text>
        </View>
        <View>
          <Button
            buttonStyle={shadowStyles}
            containerStyle={{
              marginTop: 10,
              width: 300,
            }}
            onPress={() => navigation.navigate('Main')}
            title="CONTINUE SHOPPING"
          />
        </View>
      </View>
    </View>
  );
};

export default OrderConfirmation;
