import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  item: {
    display: 'flex',
    margin: 5,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    borderRadius: 5,
    backgroundColor: COLORS.neutral_100,
    shadowColor: COLORS.neutral_500,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
  },
  image: {
    marginTop: 5,
    marginBottom: 5,
    width: 100,
    height: 100,
  },
  productInfoBar: {
    display: 'flex',
    position: 'relative',
    left: -10,
  },
  productName: {
    left: -15,
    top: -5,
    color: COLORS.neutral_700,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  coastBar: {
    top: -5,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
  },
  price: {
    left: -25,
    top: 5,
    width: 40,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    position: 'absolute',
  },
  discount: {
    left: 20,
    top: 5,
    width: 40,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    color: COLORS.neutral_500,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: COLORS.neutral_500,
    position: 'absolute',
  },
  percent: {
    left: 65,
    top: 5,
    color: COLORS.blue_300,
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    position: 'absolute',
  },
});