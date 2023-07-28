import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  LogBox,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import Bar from '../bar';

type myOrdersProps = {
  route: any;
  navigation: any;
};

const MyOrders = ({route, navigation}: myOrdersProps) => {
  const [orderAttributes, setOrderAttributes] = useState();
  const [orderIncluded, setOrderIncluded] = useState([]);
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
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    const getOrdersData = async () => {
      const response = await fetch(
        'https://demo.spreecommerce.org/api/v2/storefront/account/orders?include=variants.images',
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      const content = await response.json();
      setOrderAttributes(content.data);
      setOrderIncluded(content.included);
    };

    setTimeout(getOrdersData, 1000);
  }, [orderAttributes, token]);

  const getOrderImage = (imageId: string) => {
    for (let i = 0; i < orderIncluded.length; i++) {
      console.log(imageId);
      if (orderIncluded[i].id === imageId) {
        const imageAttribute = orderIncluded[i].relationships.images.data[0].id;
        for (let j = 0; j < orderIncluded.length; j++) {
          if (orderIncluded[j].id === imageAttribute) {
            return orderIncluded[j].attributes.original_url;
          }
        }
      }
    }
  };

  type orderType = {
    orderNumber: string;
    imagePath: string;
    total: string;
    currency: string;
  };

  const Item = ({orderNumber, imagePath, total, currency}: orderType) => (
    <View>
      <View style={styles.priceItemsElements}>
        <View style={styles.oderItem}>
          <Text style={styles.oderItemTitle}>{orderNumber}</Text>
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
      </View>
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
      <View style={styles.centeredView}>
        <ScrollView>
          {orderAttributes && (
            <View style={[styles.orderCard, cardStyles]}>
              <FlatList
                data={orderAttributes}
                renderItem={({item}) => (
                  <Item
                    orderNumber={item.attributes.number}
                    total={item.attributes.total}
                    currency={item.attributes.currency}
                    imagePath={getOrderImage(
                      item.relationships.variants.data[0].id,
                    )}
                  />
                )}
                keyExtractor={item => item.id}
              />
              <View style={styles.splitLine} />
              <View>
                <Text
                  style={styles.orderDetailLink}
                  onPress={() => navigation.navigate('MyOrderDetails')}>
                  View Order Details
                </Text>
              </View>
            </View>
          )}
          {!orderAttributes && (
            <View
              style={[styles.onLoadDataContainer, styles.onLoadDataHorizontal]}>
              <ActivityIndicator size="large" color={COLORS.blue_500} />
              <View>
                <Text style={styles.loadingData}>Loading orders...</Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default MyOrders;
