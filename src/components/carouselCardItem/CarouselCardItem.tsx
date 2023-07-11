import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

type carouselCardItemProps = {
  item: {};
  index: number;
};

const CarouselCardItem = ({item, index}: carouselCardItemProps) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: item.imgUrl}} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

export default CarouselCardItem;
