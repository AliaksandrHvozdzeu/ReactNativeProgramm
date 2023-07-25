import React from 'react';
import {Image, Platform, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import Bar from '../bar';

type myOrdersProps = {
  navigation: any;
};

const MyOrders = ({navigation}: myOrdersProps) => {
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
          <View style={[styles.orderCard, cardStyles]}>
            <Text style={styles.orderData}>30/11/2019 10:43</Text>
            <View style={styles.priceItemsElements}>
              <View style={styles.oderItem}>
                <Text style={styles.oderItemTitle}>Xiaomi Mi A3</Text>
              </View>
              <View style={styles.orderItem}>
                <Image
                  style={styles.orderItemImage}
                  source={require('../../assets/test.png')}
                />
              </View>
            </View>
            <View style={styles.splitLine} />
            <View style={styles.priceItemsElements}>
              <View style={styles.oderItem}>
                <Text style={styles.oderItemTitle}>Xiaomi Mi A3</Text>
              </View>
              <View style={styles.orderItem}>
                <Image
                  style={styles.orderItemImage}
                  source={require('../../assets/test.png')}
                />
              </View>
            </View>
            <View style={styles.splitLine} />
            <View>
              <Text
                style={styles.orderDetailLink}
                onPress={() => navigation.navigate('MyOrderDetails')}>
                View Order Details
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MyOrders;
