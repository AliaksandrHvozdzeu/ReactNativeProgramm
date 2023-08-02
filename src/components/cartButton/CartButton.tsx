import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';
import * as SecureStore from 'expo-secure-store';

type cartButtonProps = {
  navigation: any;
};

const CartButton = ({navigation}: cartButtonProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadCount = async () => {
      let userToken = await SecureStore.getItemAsync('secure_token');
      fetch(
        'https://demo.spreecommerce.org/api/v2/storefront/cart?include=line_items,variants,variants.images,billing_address,shipping_address,user,payments,shipments,promotions',
        {
          method: 'GET',
          headers: {
            Accept: 'application/vnd.api+json',
            Authorization: 'Bearer ' + userToken,
          },
        },
      )
        .then(response => response.json())
        .then(data => {
          setCount(data.data.attributes.item_count);
        });
    };
    setInterval(loadCount, 1000);
  }, []);

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
      <View style={styles.budgetView}>
        <Text style={styles.budget}>{count}</Text>
      </View>
    </View>
  );
};

export default CartButton;
