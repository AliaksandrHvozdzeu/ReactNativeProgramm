import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

const CartButton = () => {
  return (
    <View style={styles.iconsSearchCartInstance}>
      <Icon
        style={styles.cart}
        type="antdesign"
        name="shoppingcart"
        color={styles.cart.color}
      />
    </View>
  );
};

export default CartButton;
