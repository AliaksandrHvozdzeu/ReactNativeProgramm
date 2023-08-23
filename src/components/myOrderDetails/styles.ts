import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: 'auto',
    alignItems: 'center',
  },
  firstBlock: {
    marginTop: 0,
  },
  ccordsStyle: {
    display: 'none',
  },
  text: {
    color: COLORS.blue_300,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 50,
  },
  link: {
    color: COLORS.blue_300,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 50,
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 5,
    borderColor: COLORS.neutral_500,
    borderStyle: 'solid',
  },
  inputName: {
    position: 'absolute',
    color: COLORS.neutral_700,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.4,
    marginLeft: 25,
    top: 4,
    backgroundColor: COLORS.neutral_100,
    zIndex: 1,
  },
  imageView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue_500,
    borderRadius: 100,
    width: 120,
    height: 120,
  },
  imageProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  modalText: {
    color: COLORS.neutral_500,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25,
    marginTop: 40,
  },
  modalDescription: {
    color: COLORS.neutral_500,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    marginTop: 10,
  },
  productCard: {
    flex: 1,
    backgroundColor: COLORS.neutral_100,
    marginTop: 15,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 120,
    width: 320,
  },
  productCardSum: {
    flex: 1,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    height: 165,
    width: 320,
  },
  secureElements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignContent: 'center',
    left: 45,
  },
  secureImage: {
    marginRight: 10,
    width: 20,
  },
  secureBlock: {

  },
  secureText: {
    color: COLORS.accent_green,
    width: '70%',
  },
  priceDetails: {
    color: COLORS.neutral_500,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 15,
    left: 5,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25,
    marginBottom: 10,
  },
  priceDetailsItem: {
    color: COLORS.neutral_500,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 15,
    left: 5,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginTop: -17,
    width: '50%',
  },
  priceDetailsNumber: {
    color: COLORS.neutral_700,
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: 15,
    left: 5,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginTop: -17,
    width: '50%',
  },
  priceDetailsNumberPromotion: {
    color: COLORS.blue_300,
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: 15,
    left: 5,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginTop: -17,
    width: '50%',
  },
  inProgressStatus: {
    color: COLORS.accent_green_dark,
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: 15,
    left: 5,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginTop: -17,
    width: '50%',
  },
  priceItemsElements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    marginTop: 20,
  },
  splitLine: {
    borderBottomColor: COLORS.neutral_300,
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  amount: {
    color: COLORS.neutral_700,
  },

  item: {
    display: 'flex',
    margin: 5,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    width: 'auto',
    borderRadius: 5,
    backgroundColor: COLORS.neutral_100,
    shadowColor: COLORS.neutral_500,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    height: 120,
  },
  image: {
    marginTop: 10,
    marginBottom: 5,
    width: 100,
    height: 100,
    right: 10,
    position: 'absolute',
  },
  productInfoBar: {
    display: 'flex',
    position: 'absolute',
    width: 'auto',
    left: 0,
  },
  productName: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_700,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: 11,
    marginLeft: 11,
    lineHeight: 20,
  },
  productDescription: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_500,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 11,
    lineHeight: 20,
  },
  productTotal: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_1000,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: 11,
    lineHeight: 20,
  },
  orderItemSum: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_700,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
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
  buttons: {
    position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,
    bottom: 0,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  delete: {
    width: 20,
    height: 20,
    flexShrink: 0,
    right: -90,
  },
  plusButton: {
    width: 30,
    alignItems: 'center',
    borderRadius: 25,
    borderColor: COLORS.neutral_300,
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
  },
  count: {
    width: 30,
    alignItems: 'center',
    color: COLORS.neutral_300,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  minusButton: {
    width: 30,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: COLORS.neutral_300,
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
  },
  orderedProducts: {
    color: COLORS.neutral_500,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 20,
    left: 5,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25,
    marginBottom: 10,
    marginTop: 20,
  },
});