import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

type CartButtonProps = {};

const DEFAULT_CART_VALUE: number = 0;

const CartButton: React.FC<CartButtonProps> = ({navigation}) => (
  <View style={styles.icon}>
    <Button
      style={styles.cart}
      icon={styles.icons}
      iconRight
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.containerStyle}
      onPress={async () => {
        const token = await SecureStore.getItemAsync('secure_token');
        if (!token) {
          navigation.navigate('MyCartLogin');
        } else {
          navigation.navigate('MyCart');
        }
      }}
    />
    <View style={styles.budgetView}>
      {DEFAULT_CART_VALUE > 0 && (
        <Text style={styles.budget}>{DEFAULT_CART_VALUE}</Text>
      )}
    </View>
  </View>
);
export default CartButton;
