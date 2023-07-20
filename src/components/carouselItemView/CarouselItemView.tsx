import React from 'react';
import {Platform, View} from 'react-native';
import Carousel from '../carousel';
import Bar from '../bar';
import {COLORS} from '../../utils/colors';
import TopBar from '../topBar';

const CarouselItemView = () => {
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

  const carouselData = [
    {
      id: 0,
      imageId: 55,
      imgUrl: 'https://picsum.photos/id/55/300/350',
    },
    {
      id: 1,
      imageId: 54,
      imgUrl: 'https://picsum.photos/id/23/300/350',
    },
    {
      id: 2,
      imageId: 27,
      imgUrl: 'https://picsum.photos/id/98/300/350',
    },
    {
      id: 3,
      imageId: 56,
      imgUrl: 'https://picsum.photos/id/98/300/350',
    },
  ];

  return (
    <View>
       <Bar
        text=""
        isSearch={true}
        isLike={false}
        style={shadowStyles}
        isCard={false}
      />
      <Carousel
        data={carouselData}
        imageHeight={350}
        imageWidth={250}
        imageTopPosition={100}
        rightButtonTopPosition={150}
        leftButtonTopPosition={150}
      />
    </View>
  );
};

export default CarouselItemView;
