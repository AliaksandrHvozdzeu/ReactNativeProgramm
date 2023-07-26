import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import AddToCartButton from '../addToCartButton';
import Carousel from '../carousel';
import {getImageById} from '../../api/ImageApi';

type productDetailsDataProps = {
  id: string;
  name: string;
  display_price: string;
  currency: string;
  description: string;
  navigation: any;
  included: {};
  images: {};
};

const ProductDetailsData = ({
  id,
  name,
  display_price,
  currency,
  description,
  navigation,
  included,
  images,
}: productDetailsDataProps) => {
  return (
    <View style={styles.productDetailsDataLayout}>
      <ScrollView>
        <View style={styles.layout}>
          <Carousel
            id={id}
            data={getImageById(id)}
            imageHeight={250}
            imageWidth={250}
            imageTopPosition={30}
            leftButtonTopPosition={100}
            rightButtonTopPosition={100}
            navigation={navigation}
            included={included}
            images={images}
          />
          <View style={styles.productInfoBar}>
            <View style={styles.productSection}>
              <Text style={styles.productName}>{name}</Text>
              <View style={styles.coastBar}>
                <Text style={styles.price}>
                  {display_price} {currency}
                </Text>
              </View>
            </View>
            <View style={styles.horizontalLine} />
            <View>
              <Text style={styles.selectColorSection}>Select color</Text>
              <View style={styles.buttonGroups}>
                <Button
                  title="Blue"
                  style={styles.selectColorButton}
                  buttonStyle={styles.buttonStyle}
                />
              </View>
            </View>
            <View style={styles.horizontalLine} />
            <View>
              <Text style={styles.descriptionSection}>Description</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <AddToCartButton navigation={navigation} />
    </View>
  );
};

export default ProductDetailsData;
