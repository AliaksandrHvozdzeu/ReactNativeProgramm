import React from 'react';
import {Dimensions, Platform, View} from 'react-native';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';
import {styles} from './styles';

type addProductProps = {
  navigation: any;
};

const AddToCartButton = ({navigation}: addProductProps) => {
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
        onPress={() => navigation.navigate('AddProductModal')}
      />
    </View>
  );
};

export default AddToCartButton;
