import React, {useState} from 'react';
import {Image, Platform, View} from 'react-native';
import Bar from '../bar';
import CarouselView, {Pagination} from 'react-native-snap-carousel';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

type CarouselItemViewProps = {};

const CarouselItemView = ({route}: CarouselItemViewProps) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = useState(0);
  const {imageData} = route.params;
  const navigation = useNavigation();

  const onPressRightButton = () => {
    isCarousel.current?.snapToNext?.();
  };

  const onPressLeftButton = () => {
    isCarousel.current?.snapToPrev?.();
  };

  const CarouselItem = ({item, index}: any) => {
    return (
      <View style={styles.bgImageWrapper} key={index}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  };

  return (
    <View>
      <Bar
        text="Product images"
        isSearch={true}
        isLike={false}
        isCard={false}
        navigation={navigation}
      />
      <View style={styles.itemsElements}>
        <View style={[styles.carouselRightButton]}>
          <Icon
            style={styles.carouselRightButtonIcon}
            type="antdesign"
            name="left"
            size={20}
            color={styles.carouselRightButtonIcon.color}
            onPress={onPressLeftButton}
          />
        </View>
        <View
          style={[
            styles.carouselItem,
            Platform.select({
              ios: {
                marginTop: 120,
              },
              android: {
                marginTop: 220,
              },
            }),
          ]}>
          <CarouselView
            layout={'default'}
            ref={isCarousel}
            data={imageData}
            renderItem={CarouselItem}
            sliderWidth={250}
            itemWidth={250}
            inactiveSlideShift={0}
            useScrollView={true}
            onSnapToItem={index => setIndex(index)}
          />
          <Pagination
            dotsLength={imageData.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={styles.dotStyle}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
        </View>
        <View style={[styles.carouselLeftButton]}>
          <Icon
            style={styles.carouselLeftButtonIcon}
            type="antdesign"
            name="right"
            size={20}
            color={styles.carouselLeftButtonIcon.color}
            onPress={onPressRightButton}
          />
        </View>
      </View>
    </View>
  );
};

export default CarouselItemView;
