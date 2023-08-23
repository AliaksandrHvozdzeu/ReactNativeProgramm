import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';

type ItemProps = {
  title: string;
  src: string;
  price: string;
  currency: string;
  description: string;
};

const cardStyles = Platform.select({
  ios: {
    shadowColor: COLORS.neutral_500,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
  },
  android: {
    shadowColor: COLORS.neutral_500,
    shadowRadius: 4,
    elevation: 10,
  },
});

const productDetailsStyles = Platform.select({
  ios: {
    left: 110,
  },
  android: {
    left: 120,
  },
});

const ProductSearchListCard = ({
  title,
  src,
  price,
  currency,
  description,
}: ItemProps) => {
  return (
    <View style={[styles.item, cardStyles]}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: src,
          }}
        />
      </View>
      <View style={[styles.productInfoBar, productDetailsStyles]}>
        <Text style={styles.productName}>{title}</Text>
        <Text style={styles.productDescription}>{description}</Text>
        <View style={styles.coastBar}>
          <Text style={styles.price}>
            {price} {currency}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductSearchListCard;
