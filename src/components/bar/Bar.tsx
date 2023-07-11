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
};

const Bar = ({text, isSearch, isLike}: barTextProps) => {
  return (
    <View style={styles.layout}>
      <View style={styles.bar}>
        {isSearch && <BackButton />}
        {!isSearch && <MenuButton />}
        <BarText text={text} />
        {isLike && <LikeButton />}
        <CartButton count={10} />
      </View>
    </View>
  );
};

export default Bar;
