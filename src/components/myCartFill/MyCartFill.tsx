import React from 'react';
import {Image, Platform, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import {Button} from 'react-native-elements';
import Bar from '../bar';

type myCartFillProps = {
  navigation: any;
};

const MyCartFill = ({navigation}: myCartFillProps) => {
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
        text="My Cart"
        isSearch={true}
        isLike={false}
        style={shadowStyles}
        isCard={false}
        navigation={navigation}
      />
      <View style={styles.centeredView}>
        <ScrollView>
          <View style={[styles.productCard, cardStyles]}>
            <Text>sdfsdf</Text>
          </View>
          <View style={[styles.productCardSum, cardStyles]}>
            <Text style={styles.priceDetails}>Price details</Text>
            <View style={styles.priceItemsElements}>
              <Text style={styles.priceDetailsItem}>Price (1 item)</Text>
              <Text style={styles.priceDetailsNumber}>$222</Text>
            </View>
            <View style={styles.priceItemsElements}>
              <Text style={styles.priceDetailsItem}>Delivery</Text>
              <Text style={styles.priceDetailsNumber}>$1</Text>
            </View>
            <View style={styles.priceItemsElements}>
              <Text style={styles.priceDetailsItem}>Discount</Text>
              <Text style={styles.priceDetailsNumber}>-$22</Text>
            </View>
            <View style={styles.priceItemsElements}>
              <Text style={styles.priceDetailsItem}>Tax (2%)</Text>
              <Text style={styles.priceDetailsNumber}>$4.44</Text>
            </View>
            <View style={styles.splitLine} />
            <View style={styles.priceItemsElements}>
              <Text style={[styles.priceDetailsItem, styles.amount]}>
                Amount Payable
              </Text>
              <Text style={[styles.priceDetailsNumber, styles.amount]}>
                $227.44
              </Text>
            </View>
          </View>
          <View style={styles.secureElements}>
            <Image
              style={styles.secureImage}
              source={require('../../assets/shield.png')}
            />
            <Text style={styles.secureText}>
              Safe and Secure Payments 100% Authentic Products
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MyCartFill;
