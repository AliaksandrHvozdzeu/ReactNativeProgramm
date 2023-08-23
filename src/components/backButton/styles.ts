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
  buttonStyle: {
    backgroundColor: COLORS.blue_500,
    marginTop: 2,
  },
  containerStyle: {
    height: 40,
    width: 45,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  icon: {
    name: 'arrow-back',
    type: 'ionicons',
    size: 25,
    color: 'white',
  },
});
