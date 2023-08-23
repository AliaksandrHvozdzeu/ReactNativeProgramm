import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';

type ItemProps = {
  title: string;
  src: string;
  price: string;
  currency: string;
};

const cardStyles = Platform.select({
  ios: {
    shadowColor: COLORS.neutral_500,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    width: 162,
  },
  android: {
    shadowColor: COLORS.neutral_500,
    shadowRadius: 4,
    elevation: 10,
    width: 172,
  },
});

const ProductListCard = ({title, src, price, currency}: ItemProps) => {
  return (
    <View style={[styles.item, cardStyles]}>
      <View>
        <Image style={styles.image} source={{uri: src}} />
      </View>
      <View style={styles.productInfoBar}>
        <Text style={styles.productName}>{title}</Text>
        <View style={styles.coastBar}>
          <Text style={styles.price}>
            {price} {currency}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductListCard;
