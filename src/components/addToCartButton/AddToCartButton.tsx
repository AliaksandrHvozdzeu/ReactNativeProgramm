import React, {useState} from 'react';
import {Dimensions, Platform, View} from 'react-native';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';
import {styles} from './styles';
import {getXSpreeToken} from '../../api/ProductsApi';

type addProductProps = {
  navigation: any;
  id: string;
  token: string;
  selectColor: {};
};

const AddToCartButton = ({
  navigation,
  id,
  token,
  selectColor,
}: addProductProps) => {
  const [xSpreeToken, setXSpreeToken] = useState('');

  const ADD_TO_CART_BUTTON_POSITION_IOS =
    Dimensions.get('screen').height -
    Math.floor(Dimensions.get('screen').height / 100) * 85;
  const ADD_TO_CART_BUTTON_POSITION_ANDROID =
    Dimensions.get('screen').height -
    Math.floor(Dimensions.get('screen').height / 100) * 80;

  const addToCarButtonStyle = Platform.select({
    ios: {
      bottom: ADD_TO_CART_BUTTON_POSITION_IOS,
    },
    android: {
      bottom: ADD_TO_CART_BUTTON_POSITION_ANDROID,
    },
  });

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

  const addToCart = (productId: string) => {
    if (!token) {
      navigation.navigate('LogIn');
    } else {
      if (!selectColor.id) {
        navigation.navigate('ChooseColorModal');
      } else {
        getXSpreeToken(token).then(json => {
          setXSpreeToken(json.data.attributes.token);
        });

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
    <View style={[styles.buttonViewStyle, addToCarButtonStyle]}>
      <Button
        title="ADD TO CART"
        buttonStyle={shadowStyles}
        containerStyle={{
          width: '100%',
          marginHorizontal: 50,
          marginVertical: 10,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        titleStyle={{
          fontSize: 15,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '500',
          letterSpacing: 1.25,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
        onPress={() => addToCart(id)}
      />
    </View>
  );
};

export default AddToCartButton;
