import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  bar: {
    backgroundColor: COLORS.blue_500,
    height: 55,
    position: 'relative',
    width: 'auto',
    zIndex: 0,
  },
  layout: {
    height: 55,
    alignSelf: 'stretch',
    zIndex: 1000,
    shadowColor: COLORS.neutral_700,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
    borderRadius: 3,
  },
  ios: {
    shadowColor: COLORS.neutral_700,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
    borderRadius: 3,
    zIndex: 1,
  },
  android: {
    shadowColor: COLORS.neutral_700,
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
    borderRadius: 3,
    zIndex: 1,
  }
});
