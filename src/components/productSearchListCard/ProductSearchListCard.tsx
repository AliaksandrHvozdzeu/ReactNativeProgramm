import React, {useEffect, useState} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import {Icon} from 'react-native-elements';
import {getProductListByTag} from '../../api/ProductsApi';

type ItemProps = {
  title: string;
  src: string;
  price: string;
  currency: string;
  description: string;
  navigation: any;
  isWishList: boolean;
  slug: string;
  images: {};
  included: {};
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
  navigation,
  isWishList,
  slug,
  images,
  included,
}: ItemProps) => {
  const [productBySlagData, setProductBySlagData] = useState({});
  useEffect(() => {
    getProductListByTag(slug).then(json => {
      setProductBySlagData(json.data);
    });
  }, []);

  const deleteItem = () => {

  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetails', {
          slug: productBySlagData,
          images: images,
          included: included,
        })
      }>
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
          {isWishList && (
            <View style={styles.icon}>
              <Icon
                style={styles.delete}
                type="antdesign"
                name="delete"
                size={15}
                color={styles.delete.color}
                onPress={deleteItem}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductSearchListCard;
