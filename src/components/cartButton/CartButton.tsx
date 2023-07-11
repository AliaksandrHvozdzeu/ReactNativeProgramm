import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

type cartButtonProps = {
  count: number;
};

const CartButton = ({count}: cartButtonProps) => {
  return (
    <View style={styles.icon}>
      <Icon
        style={styles.cart}
        type="antdesign"
        name="shoppingcart"
        color={styles.cart.color}
      />
      <View style={styles.budgetView}>
        <Text style={styles.budget}>{count}</Text>
      </View>
    </View>
  );
};

export default CartButton;
