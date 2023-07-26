import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import CarouselView, {Pagination} from 'react-native-snap-carousel';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {buildImageArray} from '../../api/ImageApi';

type carouselData = {
  id: string;
  data: any;
  imageWidth: number;
  imageHeight: number;
  imageTopPosition: number;
  leftButtonTopPosition: number;
  rightButtonTopPosition: number;
  navigation: any;
  included: {};
  images: [];
};
const Carousel = ({
  id,
  data,
  imageWidth,
  imageHeight,
  imageTopPosition,
  leftButtonTopPosition,
  rightButtonTopPosition,
  navigation,
  included,
  images,
}: carouselData) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = useState(0);

  const getImagesData = () => {
    return buildImageArray(images, included);
  };

  const onPressRightButton = () => {
    isCarousel.current?.snapToNext?.();
  };

  const onPressLeftButton = () => {
    isCarousel.current?.snapToPrev?.();
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

  const CarouselItem = ({item, index}: any) => {
    return (
      <View style={styles.container} key={index}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CarouselItemView', {
              imageData: getImagesData(),
            })
          }>
          <Image source={{uri: item}} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  };

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
      <View>
        <CarouselView
          layout={'default'}
          ref={isCarousel}
          data={getImagesData()}
          renderItem={CarouselItem}
          sliderWidth={250}
          itemWidth={250}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          dotsLength={getImagesData.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'red',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
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
    </View>
  );
};

export default Carousel;
