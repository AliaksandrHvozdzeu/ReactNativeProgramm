import React, {useEffect, useState} from 'react';
import {Image, LogBox, Platform, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import Bar from '../bar';
import Moment from 'moment';
import Geocode from 'react-geocode';
import {GOOGLE_MAP_API} from '@env';

type myOrderDetailsProps = {
  route: any;
  navigation: any;
};

const MyOrderDetails = ({route, navigation}: myOrderDetailsProps) => {
  const {orderIncluded, orderNumber, orderDate, orders} = route.params;
  const [coords, setCoords] = useState({});

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

  useEffect(() => {
    LogBox.ignoreLogs(['Excessive number of pending callbacks: 501.']);
    LogBox.ignoreLogs([
      'Each child in a list should have a unique "key" prop.',
    ]);
  });

  const scrollStyle = Platform.select({
    ios: {
      height: 120,
    },
    android: {
      height: 250,
    },
  });

  const getFormatDate = (date: string) => {
    Moment.locale('en');
    return Moment(date).format('DD/MM/YY hh:mm');
  };

  const getBillingAddress = () => {
    const zipcode = orderIncluded[4].attributes.zipcode;
    const countryIso3 = orderIncluded[4].attributes.country_iso3;
    const stateName = orderIncluded[4].attributes.state_name;
    const city = orderIncluded[4].attributes.city;
    const address1 = orderIncluded[4].attributes.address1;
    const address2 = orderIncluded[4].attributes.address2;
    const full: string = `${zipcode}, ${countryIso3}, ${stateName}, ${city}, ${address1}, ${address2}`;
    return full;
  };

  const getBillingCoordinatesByAddress = () => {
    const zipcode = orderIncluded[4].attributes.zipcode;
    const city = orderIncluded[4].attributes.city;
    const address1 = orderIncluded[4].attributes.address1;
    const address2 = orderIncluded[4].attributes.address2;
    const full: string = `${zipcode}, ${city}, ${address1}, ${address2}`;

    Geocode.setApiKey(GOOGLE_MAP_API);
    Geocode.fromAddress(full).then(
      response => {
        const {lat, lng} = response.results[0].geometry.location;
        //console.log(lat, lng);
        setCoords({
          latitude: lat,
          longitude: lng,
          address: full,
        });
      },
      error => {
        console.error(error);
      },
    );
    console.log(coords);
    return coords;
  };

  return (
    <View style={styles.centeredView}>
      <Bar
        text="Order Details"
        isSearch={true}
        isLike={false}
        style={shadowStyles}
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
              {getFormatDate(orderDate)}
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
                  address: getBillingCoordinatesByAddress(),
                })
              }>
              {getBillingAddress()}
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
        <ScrollView style={scrollStyle}>
          {orders &&
            orders.data.map((product, index) => (
              <View key={index}>
                <View style={[styles.productCard, cardStyles]}>
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
