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
    right: 25,
    top: 15,
  },
  like: {
    width: 25,
    height: 25,
    flexShrink: 0,
    color: COLORS.neutral_100,
  },
});
