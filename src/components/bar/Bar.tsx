import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MenuButton from '../menuButton';
import CartButton from '../cartButton';
import BarText from '../barText';
import BackButton from '../backButton';

type barTextProps = {
  text: string;
  isSearch: boolean;
};

const Bar = ({text, isSearch}: barTextProps) => {
  return (
    <View style={styles.layout}>
      <View style={styles.bar}>
        {isSearch && <BackButton />}
        {!isSearch && <MenuButton />}
        <BarText text={text} />
        <CartButton />
      </View>
    </View>
  );
};

export default Bar;
