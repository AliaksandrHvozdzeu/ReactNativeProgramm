import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import Bar from '../bar';
import MyOrderItem from './MyOrderItem';
import {useNavigation} from '@react-navigation/native';

type MyOrdersProps = {
  route: any;
};

const MyOrders = ({route}: MyOrdersProps) => {
  const [orderIncluded, setOrderIncluded] = useState([]);
  const [orders, setOrders] = useState([]);
  const {token} = route.params;
  const navigation = useNavigation();

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

  return (
    <View style={styles.centeredView}>
      <Bar text="My Orders" isSearch={true} isLike={false} isCard={true} />
      <View style={styles.centeredViewScroll}>
        {orders ? (
          <View style={styles.orderCard}>
            <FlatList
              data={orders.data}
              renderItem={({item}) => (
                <MyOrderItem
                  name={getProductName(item.attributes.number)}
                  title={orderIncluded[0]?.attributes?.name}
                  date={item.attributes.created_at}
                  total={orderIncluded[0]?.attributes?.display_total}
                  currency={orderIncluded[0]?.attributes?.currency}
                  imagePath={orderIncluded[2]?.attributes?.original_url}
                  orderIncluded={orderIncluded}
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
        ) : (
          <View style={styles.onLoadDataContainer}>
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
