import React from 'react';
import {Image, Platform, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Bar from '../bar';
import DateTimeUtils from '../../utils/DateTimeUtils';
import AddressUtils from '../../utils/AddressUtils';
import {useNavigation} from '@react-navigation/native';

type MyOrderDetailsProps = {};

const MyOrderDetails = ({route}: MyOrderDetailsProps) => {
  const {orderIncluded, orderNumber, orderDate, orders} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Bar
        text="Order Details"
        isSearch={true}
        isLike={false}
        isCard={true}
        navigation={navigation}
      />
      <View style={styles.centeredView}>
        <View style={[styles.productCardSum]}>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Order ID</Text>
            <Text style={styles.priceDetailsNumber}>{orderNumber}</Text>
          </View>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Order Date</Text>
            <Text style={styles.priceDetailsNumber}>
              {DateTimeUtils.getFormatDate(orderDate)}
            </Text>
          </View>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Total Amount</Text>
            <Text style={styles.priceDetailsNumber}>
              {orderIncluded[0].attributes.display_total}
            </Text>
          </View>

          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Promotion</Text>
            <Text style={styles.priceDetailsNumberPromotion}>
              {orderIncluded[8].attributes.display_amount}
            </Text>
          </View>

          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Payment Mode</Text>
            <Text style={styles.priceDetailsNumber}>
              {orderIncluded[6].attributes.payment_method_name}
            </Text>
          </View>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Shipping Address</Text>
            <Text
              style={styles.priceDetailsNumber}
              onPress={() =>
                navigation.navigate('MyOrderMap', {
                  address:
                    AddressUtils.getBillingCoordinatesByAddress(orderIncluded),
                })
              }>
              {AddressUtils.getBillingAddress(orderIncluded)}
            </Text>
          </View>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Status</Text>
            <Text style={styles.inProgressStatus}>
              {orderIncluded[6].attributes.state}
            </Text>
          </View>
          <Text style={styles.orderedProducts}>Ordered Products</Text>
        </View>
        <ScrollView
          style={Platform.select({
            ios: styles.scrollStyleIos,
            android: styles.scrollStyleAndroid,
          })}>
          {orders &&
            orders.data.map((product, index) => (
              <View key={index}>
                <View
                  style={[
                    styles.productCard,
                    Platform.select({
                      ios: styles.ios,
                      android: styles.android,
                    }),
                  ]}>
                  <View style={[styles.productInfoBar]}>
                    <Text style={styles.productName}>
                      {orderIncluded[0].attributes.name}
                    </Text>
                    <Text style={styles.productDescription}>
                      {orderIncluded[0].attributes.options_text}
                    </Text>
                    <Text style={styles.productDescription}>
                      Qty: {orderIncluded[0].attributes.quantity}
                    </Text>
                    <Text style={styles.productTotal}>
                      {orderIncluded[0].attributes.display_total}
                    </Text>
                  </View>
                  <View>
                    <Image
                      style={styles.image}
                      source={{
                        uri: `https://demo.spreecommerce.org${orderIncluded[2].attributes.original_url}`,
                      }}
                    />
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MyOrderDetails;
