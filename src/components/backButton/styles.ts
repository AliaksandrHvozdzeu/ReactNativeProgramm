import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  iconLeft: {
    display: 'flex',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    top: 12,
    left: 15,
  },
  back: {
    width: 50,
    height: 50,
    flexShrink: 0,
    color: COLORS.neutral_100,
  },
});
