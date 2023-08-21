import React from 'react';
import {Platform, View} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './styles';
import SizeAndPositionUtils from '../../utils/SizeAndPositionUtils';
import {useNavigation} from '@react-navigation/native';

type AddProductProps = {
  id: string;
  token: string;
  selectColor: {};
};

const AddToCartButton = ({id, token, selectColor}: AddProductProps) => {
  const navigation = useNavigation();

  const addToCart = (productId: string) => {
    if (!token) {
      navigation.navigate('LogIn');
    } else {
      if (!selectColor.id) {
        navigation.navigate('ChooseColorModal');
      } else {
        fetch(
          'https://demo.spreecommerce.org/api/v2/storefront/cart/add_item',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({
              variant_id: productId,
              quantity: 1,
              options: {},
              public_metadata: {
                first_item_order: true,
              },
              private_metadata: {
                recommended_by_us: false,
              },
            }),
          },
        )
          .then(response => response.json())
          .then(data => {
            navigation.navigate('AddProductModal');
          });
      }
    }
  };

  return (
    <View
      style={[
        styles.buttonViewStyle,
        Platform.select({
          ios: {
            bottom: SizeAndPositionUtils.iosButtonPosition(),
          },
          android: {
            bottom: SizeAndPositionUtils.androidButtonPosition(),
          },
        }),
      ]}>
      <Button
        title="ADD TO CART"
        buttonStyle={Platform.select({
          ios: styles.ios,
          android: styles.android,
        })}
        containerStyle={styles.containerStyle}
        titleStyle={styles.titleStyle}
        onPress={() => addToCart(id)}
      />
    </View>
  );
};

export default AddToCartButton;
