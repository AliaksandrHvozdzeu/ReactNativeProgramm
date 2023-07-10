import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  bar: {
    backgroundColor: COLORS.blue_500,
    height: 55,
    position: 'relative',
    width: 'auto',
  },
  layout: {
    height: 55,
    alignSelf: 'stretch',
  },
});
