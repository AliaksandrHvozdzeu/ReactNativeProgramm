import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  layout: {
    backgroundColor: COLORS.neutral_100,
    width: 'auto',
    height: 'auto',
  },
  cart: {
    width: 25,
    height: 25,
    flexShrink: 0,
  },
});
