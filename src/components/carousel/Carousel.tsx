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

  useEffect(() => {
    setImageSrc('https://picsum.photos/id/' + data[total].imageId + '/200/300');
  }, [total, data, data.length]);

  const onPressRightButton = () => {
    if (total !== data.length - 1) {
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

  const setDotStyle = (key: number) => {
    return key === 0 ? COLORS.blue_500 : COLORS.neutral_500;
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
        {data.map(item => (
          <Icon
            key={item.id}
            size={40}
            type="entypo"
            name="dot-single"
            color={setDotStyle(item.id)}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
