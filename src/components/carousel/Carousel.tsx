import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {COLORS} from '../../utils/colors';
import Animated, { SharedTransition, withSpring } from "react-native-reanimated";

type carouselData = {
  data: any;
  imageWidth: number;
  imageHeight: number;
  imageTopPosition: number;
  leftButtonTopPosition: number;
  rightButtonTopPosition: number;
  navigation: any;
};
const Carousel = ({
  data,
  imageWidth,
  imageHeight,
  imageTopPosition,
  leftButtonTopPosition,
  rightButtonTopPosition,
  navigation,
}: carouselData) => {
  const [total, setTotal] = useState(1);
  const [imageSrc, setImageSrc] = useState(
    'https://picsum.photos/id/' + data[total].imageId + '/200/300',
  );
  const initialDotsArrayValue: any[] | (() => any[]) = [
    {
      imageId: 0,
      dotStyle: COLORS.blue_500,
    },
  ];
  const [dotsArray, setDotsArray] = useState(initialDotsArrayValue);

  useEffect(() => {
    setImageSrc('https://picsum.photos/id/' + data[total].imageId + '/200/300');
    createDots();
  }, [total, data, data.length]);

  const createDots = () => {
    let dotData: {imageId: any; dotStyle: string};
    const array = [];
    for (let i = 0; i < data.length; i++) {
      dotData =
        i === 0
          ? {
              imageId: i,
              dotStyle: COLORS.blue_500,
            }
          : {
              imageId: i,
              dotStyle: COLORS.neutral_500,
            };
      array.push(dotData);
    }
    setDotsArray([]);
    setDotsArray(array);
  };

  const onPressRightButton = () => {
    if (total !== data.length - 1) {
      setTotal(total + 1);
    }
  };

  const onPressLeftButton = () => {
    if (total !== 0) {
      setTotal(total - 1);
    }
  };

  const selectDotStyle = (index: number) => {
    return index === total ? COLORS.blue_500 : COLORS.neutral_500;
  };

  const carouselImageStyle = StyleSheet.create({
    image: {
      width: imageWidth,
      height: imageHeight,
    },
    carouselImage: {
      marginTop: imageTopPosition,
    },
    leftButtonTopPosition: {
      top: leftButtonTopPosition,
    },
    rightButtonTopPosition: {
      top: rightButtonTopPosition,
    },
  });

  const customTransition = SharedTransition.custom((values) => {
    'worklet';
    return {
      height: withSpring(values.targetHeight),
      width: withSpring(values.targetWidth),
      originX: withSpring(values.targetOriginX),
      originY: withSpring(values.targetOriginY),
    };
  });

  return (
    <View style={[styles.carouselImage, carouselImageStyle.carouselImage]}>
      <View
        style={[
          styles.carouselLeftButton,
          carouselImageStyle.leftButtonTopPosition,
        ]}>
        <Icon
          style={styles.carouselLeftButtonIcon}
          type="antdesign"
          name="right"
          size={20}
          color={styles.carouselLeftButtonIcon.color}
          onPress={onPressRightButton}
        />
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('CarouselItemView')}>
        <Animated.Image
          source={{uri: imageSrc}}
          style={carouselImageStyle.image}
          sharedTransitionTag="tag"
          sharedTransitionStyle={customTransition}
        />
      </TouchableHighlight>
      <View
        style={[
          styles.carouselRightButton,
          carouselImageStyle.rightButtonTopPosition,
        ]}>
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
        {dotsArray.map((item: any, index: number) => (
          <Icon
            style={styles.dotStyles}
            key={index}
            size={40}
            type="entypo"
            name="dot-single"
            color={selectDotStyle(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
