import React from 'react';
import {Platform, View} from 'react-native';
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

const Bar: React.FC<BarTextProps> = ({
  text,
  isSearch,
  isLike,
  isCard,
  navigation,
}) => (
  <View
    style={[
      styles.layout,
      Platform.select({
        ios: styles.ios,
        android: styles.android,
      }),
    ]}>
    <View style={styles.bar}>
      {isSearch ? (
        <BackButton navigation={navigation} />
      ) : (
        <MenuButton navigation={navigation} />
      )}
      <BarText text={text} />
      {isLike ? (
        <LikeButton navigation={navigation} />
      ) : (
        <CartButton navigation={navigation} />
      )}
      {isCard && <CartButton navigation={navigation} />}
    </View>
  </View>
);

export default Bar;
