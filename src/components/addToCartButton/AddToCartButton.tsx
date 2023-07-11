import React from 'react';
import {Dimensions, Platform, View} from 'react-native';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

const AddToCartButton = () => {
  const ADD_TO_CART_BUTTON_POSITION_IOS = Dimensions.get('screen').height - 510;
  const ADD_TO_CART_BUTTON_POSITION_ANDROID =
    Dimensions.get('screen').height - 650;

  const addToCarButtonStyle = Platform.select({
    ios: {
      position: 'absolute',
      bottom: ADD_TO_CART_BUTTON_POSITION_IOS,
      width: '100%',
      alignItems: 'center',
    },
    android: {
      position: 'absolute',
      bottom: ADD_TO_CART_BUTTON_POSITION_ANDROID,
      width: '100%',
      alignItems: 'center',
    },
  });

  return (
    <View style={addToCarButtonStyle}>
      <Button
        title="ADD TO CART"
        buttonStyle={{
          backgroundColor: COLORS.blue_500,
          borderRadius: 3,
          zIndex: 1,
        }}
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
      />
    </View>
  );
};

export default AddToCartButton;
