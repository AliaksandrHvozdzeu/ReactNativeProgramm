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
    right: 0,
    top: 34,
  },
  icons: {
    name: 'cart',
    type: 'material-community',
    size: 20,
    color: 'white',
  },
  buttonStyle: {
    position: 'absolute',
    backgroundColor: COLORS.blue_500,
  },
  containerStyle: {
    height: 40,
    width: 50,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  cart: {
    flexShrink: 0,
    color: COLORS.neutral_100,
  },
  budgetView: {
    backgroundColor: COLORS.accent_red,
    position: 'absolute',
    top: -20,
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
