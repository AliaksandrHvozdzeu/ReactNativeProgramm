import React, {useState} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import Bar from '../bar';

type myOrderDetailsProps = {
  navigation: any;
};

const MyOrderDetails = ({navigation}: myOrderDetailsProps) => {
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

  const scrollStyle = Platform.select({
    ios: {
      height: 130,
    },
    android: {
      height: 250,
    },
  });

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
            <Text style={styles.priceDetailsNumber}>OD3489488519356</Text>
          </View>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Order Date</Text>
            <Text style={styles.priceDetailsNumber}>30/11/2019 10:34</Text>
          </View>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Total Ammount</Text>
            <Text style={styles.priceDetailsNumber}>$380.44</Text>
          </View>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Payment Mode</Text>
            <Text style={styles.priceDetailsNumber}>COD</Text>
          </View>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Shipping Address</Text>
            <Text
              style={styles.priceDetailsNumber}
              onPress={() => navigation.navigate('MyOrderMap')}>
              TestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
            </Text>
          </View>
          <View style={styles.priceItemsElements}>
            <Text style={styles.priceDetailsItem}>Status</Text>
            <Text style={styles.inProgressStatus}>In-Proccesing</Text>
          </View>
          <Text style={styles.orderedProducts}>Ordered Products</Text>
        </View>

        <ScrollView style={scrollStyle}>
          <View style={[styles.productCard, cardStyles]}>
            <View style={[styles.productInfoBar]}>
              <Text style={styles.productName}>Xiaomi Mi A3</Text>
              <Text style={styles.productDescription}>Color: Blue</Text>
              <Text style={styles.productDescription}>Qty: 1</Text>
              <Text style={styles.orderItemSum}>$222</Text>
            </View>
            <View>
              <Image
                style={styles.image}
                source={require('../../assets/test.png')}
              />
            </View>
          </View>
          <View style={[styles.productCard, cardStyles]}>
            <View style={[styles.productInfoBar]}>
              <Text style={styles.productName}>Xiaomi Mi A3</Text>
              <Text style={styles.productDescription}>Color: Blue</Text>
              <Text style={styles.productDescription}>Qty: 1</Text>
              <Text style={styles.productDescription}>$222</Text>
            </View>
            <View>
              <Image
                style={styles.image}
                source={require('../../assets/test.png')}
              />
            </View>
          </View>
          <View style={[styles.productCard, cardStyles]}>
            <View style={[styles.productInfoBar]}>
              <Text style={styles.productName}>Xiaomi Mi A3</Text>
              <Text style={styles.productDescription}>Color: Blue</Text>
              <Text style={styles.productDescription}>Qty: 1</Text>
              <Text style={styles.productDescription}>$222</Text>
            </View>
            <View>
              <Image
                style={styles.image}
                source={require('../../assets/test.png')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MyOrderDetails;
