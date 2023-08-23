import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import CarouselView, {Pagination} from 'react-native-snap-carousel';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {buildImageArray} from '../../api/ImageApi';
import {useNavigation} from '@react-navigation/native';

type CarouselData = {
  included: {};
  images: [];
};
const Carousel = ({included, images}: CarouselData) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const getImagesData = () => {
    return buildImageArray(images, included);
  };

  const onPressRightButton = () => {
    isCarousel.current?.snapToNext?.();
  };

  const onPressLeftButton = () => {
    isCarousel.current?.snapToPrev?.();
  };

  const CarouselItem = ({item, indexRow}: any) => {
    return (
      <View style={styles.container} key={indexRow}>
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
          dotStyle={styles.dotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
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
    </View>
  );
};

export default Carousel;
