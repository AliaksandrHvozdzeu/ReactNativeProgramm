import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  menuLabel: {
    color: COLORS.blue_300,
    fontFamily: 'Roboto',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 50,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuGroupText: {
    color: COLORS.neutral_500,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
  },
  menuItem: {
    color: COLORS.neutral_700,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    marginLeft: -10,
  },
  menuLine: {
    borderBottomColor: COLORS.neutral_300,
    borderBottomWidth: 1,
    marginTop: 20,
  },
  share: {},
  menuIcon: {
    color: COLORS.blue_500,
    size: 20,
  },
  drawItem: {
    marginBottom: -10,
  },
});
