import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

type carouselData = {
  data: any;
};

const Carousel = ({data}: carouselData) => {
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
