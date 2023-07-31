import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import Bar from '../bar';
import Moment from "moment/moment";

type myOrdersProps = {
  route: any;
  navigation: any;
};

const MyOrders = ({route, navigation}: myOrdersProps) => {
  const [orderIncluded, setOrderIncluded] = useState([]);
  const [orders, setOrders] = useState([]);
  const {token} = route.params;

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
    fetch(
      'https://demo.spreecommerce.org/api/v2/storefront/account/orders?fields%5Bcart%5D=number',
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.api+json',
          Authorization: 'Bearer ' + token,
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        setOrders(data);
      });
  }, []);

  const getProductName = (orderId: string) => {
    fetch(
      `https://demo.spreecommerce.org/api/v2/storefront/account/orders/${orderId}?include=line_items%2Cvariants%2Cvariants.images%2Cbilling_address%2Cshipping_address%2Cuser%2Cpayments%2Cshipments%2Cpromotions`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.api+json',
          Authorization: 'Bearer ' + token,
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        setOrderIncluded(data.included);
      });
    return orderId;
  };

  const getFormatDate = (date: string) => {
    Moment.locale('en');
    return Moment(date).format('DD/MM/YY hh:mm');
  };

  type orderType = {
    name: string;
    title: string;
    date: string;
    imagePath: string;
    total: string;
    currency: string;
  };

  const Item = ({name, title, date, imagePath, total, currency}: orderType) => (
    <View style={styles.priceItemsElements}>
      {orderIncluded && (
        <>
          <Text style={styles.oderDateItem}>{getFormatDate(date)}</Text>
          <View style={styles.oderItem}>
            {/*<Text style={styles.oderItemTitle}>{name}</Text>*/}
            <Text style={styles.oderItemTitle}>{title}</Text>
            <Text style={styles.oderItemTitle}>
              {total} {currency}
            </Text>
          </View>
          <View style={styles.orderItem}>
            <Image
              style={styles.orderItemImage}
              source={{uri: `https://demo.spreecommerce.org${imagePath}`}}
            />
          </View>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.centeredView}>
      <Bar
        text="My Orders"
        isSearch={true}
        isLike={false}
        style={shadowStyles}
        isCard={true}
        navigation={navigation}
      />
      <View style={styles.centeredViewScroll}>
        {orders && (
          <View style={[styles.orderCard, cardStyles]}>
            <FlatList
              data={orders.data}
              renderItem={({item}) => (
                <Item
                  name={getProductName(item.attributes.number)}
                  title={orderIncluded[0]?.attributes?.name}
                  date={item.attributes.created_at}
                  total={orderIncluded[0]?.attributes?.display_total}
                  currency={orderIncluded[0]?.attributes?.currency}
                  imagePath={orderIncluded[2]?.attributes?.original_url}
                />
              )}
              keyExtractor={item => item.id}
            />
            <View style={styles.splitLine} />
            <View>
              <Text
                style={styles.orderDetailLink}
                onPress={() =>
                  navigation.navigate('MyOrderDetails', {
                    orderIncluded: orderIncluded,
                    orderDate: orders.data[0].attributes.created_at,
                    orderNumber: orders.data[0].attributes.number,
                    orders: orders,
                  })
                }>
                View Order Details
              </Text>
            </View>
          </View>
        )}
        {!orders && (
          <View
            style={[styles.onLoadDataContainer, styles.onLoadDataHorizontal]}>
            <ActivityIndicator size="large" color={COLORS.blue_500} />
            <View>
              <Text style={styles.loadingData}>Loading orders...</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyOrders;
