import React, {useEffect, useState} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import {
  getProductList,
  getProductListByTag,
  getProductListByTagWithFullIncludes,
} from '../../api/ProductsApi';

type ItemProps = {
  title: string;
  src: string;
  price: string;
  currency: string;
  navigation: any;
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
    width: 162,
  },
  android: {
    shadowColor: COLORS.neutral_500,
    shadowRadius: 4,
    elevation: 10,
    width: 172,
  },
});

const ProductListCard = ({
  title,
  src,
  price,
  currency,
  navigation,
  slug,
  images,
  included,
}: ItemProps) => {
  const [productBySlagData, setProductBySlagData] = useState({});
  const [productColors, setProductColors] = useState([]);
  const [productIncluded, setProductIncluded] = useState([]);

  useEffect(() => {
    getProductListByTag(slug).then(json => {
      setProductBySlagData(json.data);
    });
    getProductListByTagWithFullIncludes(slug).then(json => {
      setProductIncluded(json.included);
    });
    getProductList().then(json => {
      setProductColors(json.meta.filters.option_types);
    });
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetails', {
          slug: productBySlagData,
          images: images,
          included: included,
          productColors: productColors,
          productIncluded: productIncluded,
        })
      }>
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
    </TouchableOpacity>
  );
};

export default ProductListCard;
