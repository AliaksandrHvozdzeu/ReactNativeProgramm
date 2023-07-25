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

type myCartFillProps = {
  navigation: any;
};

const MyCartFill = ({navigation}: myCartFillProps) => {
  const [count, setCount] = useState(1);

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

  const productDetailsStyles = Platform.select({
    ios: {
      left: 110,
    },
    android: {
      left: 120,
    },
  });

  const onDelete = () => {
    console.log('DELETE ITEM');
  };

  const onPlus = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

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
            <View>
              <Image
                style={styles.image}
                source={require('../../assets/test.png')}
              />
            </View>
            <View style={[styles.productInfoBar, productDetailsStyles]}>
              <Text style={styles.productName}>Xiaomi Mi A3</Text>
              <Text style={styles.productDescription}>Color: Blue</Text>
              <View style={styles.coastBar}>
                <Text style={styles.price}>$222 $0</Text>
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={onPlus}>
                <Image
                  style={styles.plusButton}
                  source={require('../../assets/plus.png')}
                />
              </TouchableOpacity>
              <Text style={styles.count}>{count}</Text>
              <TouchableOpacity onPress={onMinus}>
                <Image
                  style={styles.minusButton}
                  source={require('../../assets/minus.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onDelete}>
                <Image
                  style={styles.delete}
                  source={require('../../assets/delete.png')}
                />
              </TouchableOpacity>
            </View>
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
