import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  icon: {
    display: 'flex',
    width: 75,
    height: 25,
    paddingLeft: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexShrink: 0,
    position: 'absolute',
    right: 35,
    top: 34,
  },
  like: {
    flexShrink: 0,
    color: COLORS.neutral_100,
  },
});
