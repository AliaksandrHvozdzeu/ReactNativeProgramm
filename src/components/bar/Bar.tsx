import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MenuButton from '../menuButton';
import CartButton from '../cartButton';
import BackButton from '../backButton';
import LikeButton from '../likeButton';
import BarText from '../barText';

type BarTextProps = {
  text: string;
  isSearch: boolean;
  isLike: boolean;
  isCard: boolean;
};

const Bar: React.FC<BarTextProps> = ({text, isSearch, isLike, isCard}) => (
  <View style={styles.layout}>
    <View style={styles.bar}>
      {isSearch ? <BackButton /> : <MenuButton />}
      <BarText text={text} />
      {isLike ? <LikeButton /> : <CartButton />}
      {isCard && <CartButton />}
    </View>
  </View>
);

export default Bar;
