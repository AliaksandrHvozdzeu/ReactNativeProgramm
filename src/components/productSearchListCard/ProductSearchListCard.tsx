import React, {useEffect, useState} from 'react';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {
  getProductList,
  getProductListByTag,
  getProductListByTagWithFullIncludes,
} from '../../api/ProductsApi';
import {useNavigation} from '@react-navigation/native';

type ItemProps = {
  title: string;
  src: string;
  price: string;
  currency: string;
  slug: string;
  description: string;
  images: {};
  included: {};
};

const ProductSearchListCard = ({
  title,
  src,
  price,
  currency,
  slug,
  images,
  included,
  description,
}: ItemProps) => {
  const [productBySlagData, setProductBySlagData] = useState({});
  const [productColors, setProductColors] = useState([]);
  const [productIncluded, setProductIncluded] = useState([]);
  const navigation = useNavigation();

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
      <View
        style={[
          styles.item,
          Platform.select({
            ios: styles.ios,
            android: styles.android,
          }),
        ]}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: src,
            }}
          />
        </View>
        <View
          style={[
            styles.productInfoBar,
            Platform.select({
              ios: styles.productDetailsStylesIos,
              android: styles.productDetailsStylesAndroid,
            }),
          ]}>
          <Text style={styles.productName}>{title}</Text>
          <Text style={styles.productDescription}>{description}</Text>
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

export default ProductSearchListCard;
