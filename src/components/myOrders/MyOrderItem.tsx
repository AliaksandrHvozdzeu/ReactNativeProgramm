import React from 'react';
import {styles} from './styles';
import {Image, Text, View} from 'react-native';
import DateTimeUtils from '../../utils/DateTimeUtils';
import ImageUtils from '../../utils/ImageUtils';

type MyOrderItemProp = {
  title: string;
  date: string;
  imagePath: string;
  total: string;
  currency: string;
  orderIncluded: [];
};

const MyOrderItem: React.FC<MyOrderItemProp> = ({
  title,
  date,
  imagePath,
  total,
  currency,
  orderIncluded,
}) => (
  <View style={styles.priceItemsElements}>
    {orderIncluded ? (
      <>
        <Text style={styles.oderDateItem}>
          {DateTimeUtils.getFormatDate(date)}
        </Text>
        <View style={styles.oderItem}>
          <Text style={styles.oderItemTitle}>{title}</Text>
          <Text style={styles.oderItemTitle}>
            {total} {currency}
          </Text>
        </View>
        <View style={styles.orderItem}>
          <Image
            style={styles.orderItemImage}
            source={{uri: ImageUtils.getImageFullUrl(imagePath)}}
          />
        </View>
      </>
    ) : (
      <>
        <Text style={styles.priceItemsElements}>Error displaying order</Text>
      </>
    )}
  </View>
);

export default MyOrderItem;
