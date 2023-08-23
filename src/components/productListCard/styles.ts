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
    height: 150,
  },
  image: {
    marginTop: 5,
    marginBottom: 5,
    width: 100,
    height: 100,
  },
  productInfoBar: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    bottom: 3,
    width: 'auto',
  },
  productName: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_700,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 11,
    marginLeft: 11,
    lineHeight: 20,
  },
  coastBar: {
    flexDirection: 'row',
    marginLeft: 11,
    marginRight: 17,
  },
  price: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_700,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  currency: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_700,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
});
