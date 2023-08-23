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
    right: -5,
    top: 15,
  },
  cart: {
    width: 25,
    height: 25,
    flexShrink: 0,
    color: COLORS.neutral_100,
    zIndex: 0,
  },
  budgetView: {
    backgroundColor: COLORS.accent_red,
    position: 'absolute',
    top: -5,
    zIndex: 1,
    right: 15,
    borderRadius: 25,
    width: 20,
  },
  budget: {
    color: COLORS.neutral_100,
    fontSize: 10,
    textAlign: 'center',
  },
});
