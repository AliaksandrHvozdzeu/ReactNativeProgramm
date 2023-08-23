import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MenuButton from '../menuButton';
import CartButton from '../cartButton';
import BackButton from '../backButton';
import LikeButton from '../likeButton';
import BarText from '../barText';

type barTextProps = {
  text: string;
  isSearch: boolean;
  isLike: boolean;
  isCard: boolean;
  style: any;
  navigation: any;
};

const Bar = ({
  text,
  isSearch,
  isLike,
  isCard,
  style,
  navigation,
}: barTextProps) => {
  return (
    <View style={[styles.layout, style]}>
      <View style={styles.bar}>
        {isSearch && <BackButton navigation={navigation} />}
        {!isSearch && <MenuButton navigation={navigation} />}
        <BarText text={text} />
        {isLike && <LikeButton navigation={navigation} />}
        {isCard && <CartButton navigation={navigation} />}
      </View>
    </View>
  );
};

export default Bar;
