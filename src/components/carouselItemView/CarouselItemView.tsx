import React, {useState} from 'react';
import {Image, Platform, Text, View} from 'react-native';
import Bar from '../bar';
import {COLORS} from '../../utils/colors';
import CarouselView, {Pagination} from 'react-native-snap-carousel';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

type carouselItemViewProps = {
  navigation: any;
};

const CarouselItemView = ({route, navigation}: carouselItemViewProps) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = useState(0);
  const {imageData} = route.params;

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

  const carouselItemStyles = Platform.select({
    ios: {
      marginTop: 120,
    },
    android: {
      marginTop: 220,
    },
  });

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
        text=""
        isSearch={true}
        isLike={false}
        style={shadowStyles}
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
        <View style={[styles.carouselItem, carouselItemStyles]}>
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
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: COLORS.neutral_700,
            }}
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
