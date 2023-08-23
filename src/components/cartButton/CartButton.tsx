import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import {useNavigation} from '@react-navigation/native';

type CartButtonProps = {};

const DEFAULT_CART_VALUE: number = 0;

const CartButton: React.FC<CartButtonProps> = () => {
  const navigation = useNavigation();

  const onPress = async () => {
    try {
      const token = await SecureStore.getItemAsync('secure_token');
      if (!token) {
        navigation.navigate('MyCartLogin');
      } else {
        navigation.navigate('MyCart');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.icon}>
      <Button
        style={styles.cart}
        icon={styles.icons}
        iconRight
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        onPress={onPress}
      />
      <View style={styles.budgetView}>
        {DEFAULT_CART_VALUE > 0 && (
          <Text style={styles.budget}>{DEFAULT_CART_VALUE}</Text>
        )}
      </View>
    </View>
  );
};
export default CartButton;
