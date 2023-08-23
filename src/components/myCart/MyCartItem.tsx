import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import ProductAttributes from '../../utils/ProductAttributes';
import {Icon} from 'react-native-elements';
import {COLORS} from '../../utils/colors';
import {MINUS_PNG_PATH, PLUS_PNG_PATH} from '../../utils/images';
import ImageUtils from '../../utils/ImageUtils';

type MyCartItemProp = {
  name: string;
  title: string;
  color: string;
  total: string;
  discount: string;
  currency: string;
  itemCount: number;
  onDelete: any;
  onPlus: any;
  onMinus: any;
  cart: object;
};

const MyCartItem = ({
  name,
  title,
  color,
  total,
  discount,
  currency,
  itemCount,
  onDelete,
  onPlus,
  onMinus,
  cart,
}: MyCartItemProp) => {
  if (title && total && discount && currency) {
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
      <View style={styles.productCard}>
        <View>
          <Image
            style={styles.image}
            source={{uri: ImageUtils.getImageFullUrl(imageUri)}}
          />
        </View>
        <View style={styles.productInfoBar}>
          <Text style={styles.productName}>{title}</Text>
          <Text style={styles.productDescription}>
            {ProductAttributes.getColor(color)}
          </Text>
          <Text style={styles.productDescription}>
            {ProductAttributes.getSize(color)}
          </Text>
          <Text style={styles.productDescription}>
            {ProductAttributes.getExtraColor(color)}
          </Text>
          <View style={styles.coastBar}>
            <Text style={styles.price}>
              {total} {discount} {currency}
            </Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => onPlus(lineItem, quantity)}>
            <Image style={styles.plusButton} source={PLUS_PNG_PATH} />
          </TouchableOpacity>
          <Text style={styles.count}>{itemCount}</Text>
          <TouchableOpacity onPress={() => onMinus(lineItem, quantity)}>
            <Image style={styles.minusButton} source={MINUS_PNG_PATH} />
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

export default MyCartItem;
