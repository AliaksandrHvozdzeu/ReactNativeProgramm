import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import Bar from '../bar';
import {Button} from 'react-native-elements';
import ProcessToPaymentButton from '../processToPaymentButton';
import {getXSpreeToken} from '../../api/ProductsApi';
import MyCartItem from './MyCartItem';
import {useNavigation} from '@react-navigation/native';

type MyCartProps = {};

const MyCart = ({route}: MyCartProps) => {
  const [cart, setCart] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [xSpreeToken, setXSpreeToken] = useState('');
  const [notification, setNotification] = useState(false);
  const {token} = route.params;
  const navigation = useNavigation();
  const SHIELD_PNG_PATH: string = '../../assets/shield.png';
  const GOOD_PNG_PATH: string = '../../assets/good.png';

  useEffect(() => {
    loadCarts();
  }, []);

  const loadCarts = () => {
    fetch(
      'https://demo.spreecommerce.org/api/v2/storefront/cart?include=line_items,variants,variants.images,billing_address,shipping_address,user,payments,shipments,promotions',
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
        setCart(data);
      });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadCarts();
    setRefreshing(false);
  }, []);

  const onDelete = (lineItem: number) => {
    fetch(
      `https://demo.spreecommerce.org/api/v2/storefront/cart/remove_line_item/${lineItem}?token=` +
        token,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/vnd.api+json',
          Authorization: 'Bearer ' + token,
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          navigation.navigate('ItemRemovedFromCartModal', {
            isRemoved: true,
          });
          loadCarts();
        } else {
          navigation.navigate('ItemRemovedFromCartModal', {
            isRemoved: false,
          });
          loadCarts();
        }
      });
  };

  const setProductCount = (lineItem: number, itemCount: number) => {
    getXSpreeToken(token).then(json => {
      setXSpreeToken(json.data.attributes.token);
    });

    fetch(
      'https://demo.spreecommerce.org/api/v2/storefront/cart/set_quantity',
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          'X-Spree-Order-Token': xSpreeToken,
        },
        body: JSON.stringify({
          line_item_id: lineItem,
          quantity: itemCount,
        }),
      },
    )
      .then(response => response.json())
      .then(data => {
        setNotification(true);
        loadCarts();
      });
  };

  const onPlus = (lineItem: number, itemCount: number) => {
    itemCount += 1;
    setProductCount(lineItem, itemCount);
  };

  const onMinus = (lineItem: number, itemCount: number) => {
    itemCount -= 1;
    setProductCount(lineItem, itemCount);
  };

  const Notification = () => {
    const closeInfo = () => {
      setNotification(false);
    };
    setTimeout(closeInfo, 2500);
    return (
      <>
        {notification && (
          <View
            style={[
              styles.notificationPanel,
              Platform.select({
                ios: styles.ios,
                android: styles.android,
              }),
            ]}>
            <Text style={styles.informationHeader}>Information</Text>
            <Text style={styles.informationBody}>
              The quantity of the product has been changed.
            </Text>
          </View>
        )}
      </>
    );
  };

  return (
    <View style={styles.centeredView}>
      <Bar
        text="My Cart"
        isSearch={true}
        isLike={false}
        isCard={false}
        navigation={navigation}
      />
      <Notification />
      {!cart && (
        <View style={[styles.onLoadDataContainer, styles.onLoadDataHorizontal]}>
          <ActivityIndicator size="large" color={COLORS.blue_500} />
          <View>
            <Text style={styles.loadingData}>Loading...</Text>
          </View>
        </View>
      )}
      {cart && (
        <View style={styles.centeredView}>
          {cart.data && cart.data.attributes.item_count !== 0 && (
            <>
              <ScrollView
                contentContainerStyle={styles.cartProductsScroll}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }>
                {cart.included &&
                  cart.included.map((item, index) => (
                    <MyCartItem
                      key={index}
                      name={item.id}
                      title={item.attributes.name}
                      total={item.attributes.display_total}
                      color={item.attributes.options_text}
                      discount={item.attributes.display_additional_tax_total}
                      currency={item.attributes.currency}
                      itemCount={item.attributes.quantity}
                      onDelete={onDelete}
                      onMinus={onMinus}
                      onPlus={onPlus}
                      cart={cart}
                    />
                  ))}
                <View
                  style={[
                    styles.productCardSum,
                    Platform.select({
                      iosCardStyles: styles.iosCardStyles,
                      androidCardStyles: styles.androidCardStyles,
                    }),
                  ]}>
                  <Text style={styles.priceDetails}>Price details</Text>
                  <View style={styles.priceItemsElements}>
                    <Text style={styles.priceDetailsItem}>
                      Price ({cart?.data?.attributes.item_count} item)
                    </Text>
                    <Text style={styles.priceDetailsNumber}>
                      {cart?.data?.attributes.display_pre_tax_total}
                    </Text>
                  </View>
                  <View style={styles.priceItemsElements}>
                    <Text style={styles.priceDetailsItem}>Delivery</Text>
                    <Text style={styles.priceDetailsNumber}>
                      {cart?.data?.attributes.display_additional_tax_total}
                    </Text>
                  </View>
                  <View style={styles.priceItemsElements}>
                    <Text style={styles.priceDetailsItem}>Discount</Text>
                    <Text style={styles.priceDetailsNumber}>
                      {cart?.data?.attributes.display_promo_total}
                    </Text>
                  </View>
                  <View style={styles.priceItemsElements}>
                    <Text style={styles.priceDetailsItem}>Tax (2%)</Text>
                    <Text style={styles.priceDetailsNumber}>
                      {cart?.data?.attributes.display_tax_total}
                    </Text>
                  </View>
                  <View style={styles.splitLine} />
                  <View style={styles.priceItemsElements}>
                    <Text style={[styles.priceDetailsItem, styles.amount]}>
                      Amount Payable
                    </Text>
                    <Text style={[styles.priceDetailsNumber, styles.amount]}>
                      {cart?.data?.attributes.display_pre_tax_total}
                    </Text>
                  </View>
                </View>
                <View style={styles.secureElements}>
                  <Image
                    style={styles.secureImage}
                    source={require(SHIELD_PNG_PATH)}
                  />
                  <Text style={styles.secureText}>
                    Safe and Secure Payments 100% Authentic Products
                  </Text>
                </View>
              </ScrollView>
              <ProcessToPaymentButton navigation={navigation} token={token} />
            </>
          )}
          {cart.data && cart.data.attributes.item_count === 0 && (
            <View style={styles.emptyCenteredView}>
              <View>
                <View style={styles.imageProfile}>
                  <View style={styles.imageView}>
                    <Image source={require(GOOD_PNG_PATH)} />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.modalText}>Your Cart is Empty!</Text>
              </View>
              <Text style={styles.modalDescription}>
                Add product in your cart now
              </Text>
              <View>
                <Button
                  buttonStyle={Platform.select({
                    ios: styles.ios,
                    android: styles.android,
                  })}
                  containerStyle={styles.containerStyle}
                  onPress={() => navigation.navigate('Main')}
                  title="SHOP NOW"
                />
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default MyCart;
