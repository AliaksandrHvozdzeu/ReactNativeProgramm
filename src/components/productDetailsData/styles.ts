import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  productDetailsDataLayout: {
    zIndex: 0,
  },
  layout: {
    height: 1000,
    width: 'auto',
  },
  buttonView: {
    marginRight: 5,
  },
  selectColorButton: {
    display: 'flex',
    flex: 1,
    width: 50,
    height: 30,
    fontSize: 10,
    marginRight: 5,
    textAlign: 'center',
  },
  buttonStyle: {
    borderRadius: 0,
    flex: 1,
    height: 30,
    width: 60,
  },
  buttonGroups: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    bottom: 5,
    marginLeft: 10,
    marginRight: 30,
    marginBottom: 10,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'justify',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.neutral_700,
  },
  productName: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_700,
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop: 11,
    marginBottom: 3,
    lineHeight: 20,
  },
  coastBar: {
    bottom: 5,
    marginRight: 17,
  },
  horizontalLine: {
    borderBottomColor: COLORS.neutral_700,
    borderBottomWidth: 2,
    marginBottom: 10,
    width: 'auto',
    marginLeft: 10,
    marginRight: 30,
  },
  description: {
    bottom: 5,
    marginLeft: 10,
    marginRight: 30,
    textAlign: 'justify',
  },
  descriptionSection: {
    bottom: 5,
    marginLeft: 10,
    marginRight: 30,
    marginBottom: 10,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'justify',
  },
  selectColorSection: {
    bottom: 5,
    marginLeft: 10,
    marginRight: 30,
    marginBottom: 10,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'justify',
  },
  productSection: {
    bottom: 5,
    marginLeft: 10,
    marginRight: 30,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'justify',
  },
  price: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_700,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: 10,
  },
  currency: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_700,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
  },
  productInfoBar: {
    width: 'auto',
    position: 'absolute',
    top: 300,
    left: 10,
    marginBottom: 20,
  },
  colorSelect: {},
});
