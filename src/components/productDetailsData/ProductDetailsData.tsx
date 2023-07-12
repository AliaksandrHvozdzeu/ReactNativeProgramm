import React from 'react';
import {Platform, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Bar from '../bar';
import {COLORS} from '../../utils/colors';
import {Button} from 'react-native-elements';
import AddToCartButton from '../addToCartButton';
import Carousel from '../carousel';

type productDetailsDataProps = {
  data: any;
};

const ProductDetailsData = ({data}: productDetailsDataProps) => {
  const carouselData = [
    {
      id: 0,
      imageId: 55,
      imgUrl: 'https://picsum.photos/id/55/200/300',
    },
    {
      id: 1,
      imageId: 54,
      imgUrl: 'https://picsum.photos/id/23/200/300',
    },
    {
      id: 2,
      imageId: 27,
      imgUrl: 'https://picsum.photos/id/98/200/300',
    },
    {
      id: 3,
      imageId: 56,
      imgUrl: 'https://picsum.photos/id/98/200/300',
    },
  ];

  const shadowStyles = Platform.select({
    ios: {
      shadowColor: COLORS.neutral_700,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 2,
      shadowRadius: 4,
      backgroundColor: COLORS.blue_500,
    },
    android: {
      shadowColor: COLORS.neutral_700,
      shadowRadius: 4,
      elevation: 10,
      backgroundColor: COLORS.blue_500,
    },
  });
  const buttonFontStyle = Platform.select({
    ios: {
      color: COLORS.neutral_700,
      fontSize: 13,
      fontWeight: '400',
      textAlign: 'center',
    },
    android: {
      color: COLORS.neutral_700,
      fontSize: 12,
      fontWeight: '400',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.productDetailsDataLayout}>
      <Bar text="" isSearch={true} isLike={true} style={shadowStyles} />
      <ScrollView>
        <View style={styles.layout}>
          <Carousel
            data={carouselData}
            imageHeight={250}
            imageWidth={250}
            imageTopPosition={30}
            leftButtonTopPosition={100}
            rightButtonTopPosition={100}
          />
          <View style={styles.productInfoBar}>
            <View style={styles.productSection}>
              <Text style={styles.productName}>{data.attributes.name}</Text>
              <View style={styles.coastBar}>
                <Text style={styles.price}>
                  {data.attributes.display_price} {data.attributes.currency}
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
                  titleStyle={buttonFontStyle}
                />
              </View>
            </View>
            <View style={styles.horizontalLine} />
            <View>
              <Text style={styles.descriptionSection}>Description</Text>
              <Text style={styles.description}>
                {data.attributes.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <AddToCartButton />
    </View>
  );
};

export default ProductDetailsData;
