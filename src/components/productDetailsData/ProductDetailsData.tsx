import React, {useEffect, useState} from 'react';
import {Image, Platform, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Bar from '../bar';
import {COLORS} from '../../utils/colors';
import {Button, Icon} from 'react-native-elements';
import AddToCartButton from '../addToCartButton';

type productDetailsDataProps = {
  data: {};
};

const ProductDetailsData = ({data}: productDetailsDataProps) => {
  const barStyles = Platform.select({
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
  const [imageSrc, setImageSrc] = useState('');
  const [total, setTotal] = useState(1);

  const carousel = [
    {
      imageId: 55,
      imgUrl: 'https://picsum.photos/id/55/200/300',
    },
    {
      imageId: 54,
      imgUrl: 'https://picsum.photos/id/23/200/300',
    },
    {
      imageId: 27,
      imgUrl: 'https://picsum.photos/id/98/200/300',
    },
    {
      imageId: 56,
      imgUrl: 'https://picsum.photos/id/98/200/300',
    },
  ];

  useEffect(() => {
    setImageSrc(
      'https://picsum.photos/id/' + carousel[total].imageId + '/200/300',
    );
  }, [total, carousel, carousel.length]);

  const onPressRightButton = () => {
    if (total !== carousel.length - 1) {
      setTotal(total + 1);
    } else {
      console.log(total);
    }
  };

  const onPressLeftButton = () => {
    if (total === 0) {
      console.log(total);
    } else {
      setTotal(total - 1);
    }
  };

  const onClickDot = () => {
    console.log('DOT');
  };

  return (
    <View style={styles.productDetailsDataLayout}>
      <Bar text="" isSearch={true} isLike={true} style={[barStyles]} />
      <ScrollView>
        <View style={styles.layout}>
          <View style={styles.carouselImage}>
            <View style={styles.carouselLeftButton}>
              <Icon
                style={styles.carouselLeftButtonIcon}
                type="antdesign"
                name="right"
                size={20}
                color={styles.carouselLeftButtonIcon.color}
                onPress={onPressRightButton}
              />
            </View>
            <Image source={{uri: imageSrc}} style={styles.image} />
            <View style={styles.carouselRightButton}>
              <Icon
                style={styles.carouselRightButtonIcon}
                type="antdesign"
                name="left"
                size={20}
                color={styles.carouselRightButtonIcon.color}
                onPress={onPressLeftButton}
              />
            </View>

            <View style={styles.dotBar}>
              <Icon
                style={styles.dotActive}
                size={40}
                type="entypo"
                name="dot-single"
                color={styles.dotActive.color}
                onPress={onClickDot}
              />
              <Icon
                style={styles.dotNotActive}
                size={40}
                type="entypo"
                name="dot-single"
                color={styles.dotNotActive.color}
                onPress={onClickDot}
              />
              <Icon
                style={styles.dotNotActive}
                size={40}
                type="entypo"
                name="dot-single"
                color={styles.dotNotActive.color}
                onPress={onClickDot}
              />
            </View>
          </View>

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
                  buttonStyle={{
                    backgroundColor: '#F7F7F7',
                    borderRadius: 0,
                    flex: 1,
                    height: 30,
                    width: 60,
                  }}
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
