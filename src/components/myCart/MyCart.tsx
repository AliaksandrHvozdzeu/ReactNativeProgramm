import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import Bar from '../bar';
import {Button, Icon} from 'react-native-elements';
import ProcessToPaymentButton from '../processToPaymentButton';

type myCartProps = {
  route: any;
  navigation: any;
};

const MyCart = ({route, navigation}: myCartProps) => {
  const [cart, setCart] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const {token} = route.params;

  type cartType = {
    name: string;
    title: string;
    color: string;
    total: string;
    discount: string;
    currency: string;
    itemCount: number;
  };

  useEffect(() => {
    loadCarts();
  }, []);

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

  console.log(token);

  const setProductCount = (lineItem: number, itemCount: number) => {
    fetch(
      'https://demo.spreecommerce.org/api/v2/storefront/cart/set_quantity',
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          'X-Spree-Order-Token': 'tXAvour8FCOjmVAl-u4wSw1690791457740',
        },
        body: JSON.stringify({
          line_item_id: lineItem,
          quantity: itemCount,
        }),
      },
    )
      .then(response => response.json())
      .then(data => {
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

  const getColor = (value: string) => {
    const myArray = value.split(',');
    return myArray[0];
  };

  const getSize = (value: string) => {
    const myArray = value.split(',');
    return myArray[1].replace(' ', '');
  };
  const getExtraColor = (value: string) => {
    const myArray = value.split(',');
    if (myArray.length > 2) {
      return myArray[2].replace('and', '').replace('  ', '');
    }
  };

  const Item = ({
    name,
    title,
    color,
    total,
    discount,
    currency,
    itemCount,
  }: cartType) => {
    if (title && color && total && discount && currency) {
      let imageUri: string;
      let lineItem: number;
      let quantity: number;
      for (let i = 0; i < cart.included.length; i++) {
        if (
          title &&
          color &&
          total &&
          discount &&
          currency &&
          cart.included[i].id === name
        ) {
          const variantId = cart.included[i].relationships.variant.data.id;
          quantity = cart.included[i].attributes.quantity;
          for (let j = 0; j < cart.included.length; j++) {
            if (
              cart.included[j].id === variantId &&
              cart.included[j].type === 'variant'
            ) {
              const imageId = cart.included[j].relationships.images.data[0].id;
              for (let k = 0; k < cart.included.length; k++) {
                if (
                  cart.included[k].id === imageId &&
                  cart.included[k].type === 'image'
                ) {
                  imageUri = cart.included[k].attributes.original_url;
                  lineItem = cart.data.relationships.line_items.data[i].id;
                }
              }
            }
          }
        }
      }

      return (
        <View style={[styles.productCard, cardStyles]}>
          <View>
            <Image
              style={styles.image}
              source={{uri: `https://demo.spreecommerce.org/${imageUri}`}}
            />
          </View>
          <View style={[styles.productInfoBar, productDetailsStyles]}>
            <Text style={styles.productName}>{title}</Text>
            <Text style={styles.productDescription}>{getColor(color)}</Text>
            <Text style={styles.productDescription}>{getSize(color)}</Text>
            <Text style={styles.productDescription}>
              {getExtraColor(color)}
            </Text>
            <View style={styles.coastBar}>
              <Text style={styles.price}>
                {total} {discount} {currency}
              </Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => onPlus(lineItem, quantity)}>
              <Image
                style={styles.plusButton}
                source={require('../../assets/plus.png')}
              />
            </TouchableOpacity>
            <Text style={styles.count}>{itemCount}</Text>
            <TouchableOpacity onPress={() => onMinus(lineItem, quantity)}>
              <Image
                style={styles.minusButton}
                source={require('../../assets/minus.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onDelete(lineItem)}
              style={styles.deleteButton}>
              <Icon
                style={styles.delete}
                type="antdesign"
                name="delete"
                size={20}
                color={COLORS.neutral_500}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.centeredView}>
      <Bar
        text="My Cart"
        isSearch={true}
        isLike={false}
        style={shadowStyles}
        isCard={true}
        navigation={navigation}
      />
      <View style={styles.centeredView}>
        {cart && cart.data.attributes.item_count !== 0 && (
          <>
            <ScrollView
              contentContainerStyle={styles.cartProductsScroll}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              {cart.included &&
                cart.included.map((item, index) => (
                  <Item
                    key={index}
                    name={item.id}
                    title={item.attributes.name}
                    total={item.attributes.display_total}
                    color={item.attributes.options_text}
                    discount={item.attributes.display_additional_tax_total}
                    currency={item.attributes.currency}
                    itemCount={item.attributes.quantity}
                  />
                ))}
              <View style={[styles.productCardSum, cardStyles]}>
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
                  source={require('../../assets/shield.png')}
                />
                <Text style={styles.secureText}>
                  Safe and Secure Payments 100% Authentic Products
                </Text>
              </View>
            </ScrollView>
            <ProcessToPaymentButton navigation={navigation} />
          </>
        )}
        {cart && cart.data.attributes.item_count === 0 && (
          <View style={styles.emptyCenteredView}>
            <View>
              <View style={styles.imageProfile}>
                <View style={styles.imageView}>
                  <Image source={require('../../assets/good.png')} />
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
                buttonStyle={shadowStyles}
                containerStyle={{
                  marginTop: 10,
                  width: 300,
                }}
                onPress={() => navigation.navigate('Main')}
                title="SHOP NOW"
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyCart;
