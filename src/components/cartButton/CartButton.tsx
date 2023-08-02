import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';
import * as SecureStore from 'expo-secure-store';

type cartButtonProps = {
  navigation: any;
};

const CartButton = ({navigation}: cartButtonProps) => {
  return (
    <View style={styles.icon}>
      <Button
        style={styles.cart}
        icon={{
          name: 'cart',
          type: 'material-community',
          size: 20,
          color: 'white',
        }}
        iconRight
        buttonStyle={{
          position: 'absolute',
          backgroundColor: COLORS.blue_500,
        }}
        containerStyle={{
          height: 40,
          width: 50,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={async () => {
          const token = await SecureStore.getItemAsync('secure_token');
          console.log(token);
          if (!token) {
            navigation.navigate('MyCartLogin');
          } else {
            navigation.navigate('MyCart');
          }
        }}
      />
    </View>
  );
};

export default CartButton;
