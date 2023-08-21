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
    top: 15,
    left: 15,
  },
  icon: {
    name: 'menu',
    type: 'feather',
    size: 20,
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: COLORS.blue_500,
    zIndex: 1,
    marginTop: 2,
  },
  containerStyle: {
    height: 40,
    width: 45,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  menu: {
    flexShrink: 0,
    color: COLORS.neutral_100,
  },
});
