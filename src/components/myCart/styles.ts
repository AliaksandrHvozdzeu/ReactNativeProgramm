import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: 'auto',
    alignItems: 'center',
  },
  ios: {
    shadowColor: COLORS.neutral_700,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    borderRadius: 3,
  },
  iosCardStyles: {
    shadowColor: COLORS.neutral_500,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
  },
  iosProductDetailsStyles: {
    left: 110,
  },
  containerStyle: {
    marginTop: 10,
    width: 300,
  },
  androidProductDetailsStyles: {
    left: 120,
  },
  androidCardStyles: {
    shadowColor: COLORS.neutral_500,
    shadowRadius: 4,
    elevation: 10,
  },
  android: {
    shadowColor: COLORS.neutral_700,
    shadowRadius: 4,
    borderRadius: 3,
  },
  notificationPanel: {
    backgroundColor: COLORS.neutral_100,
    width: '100%',
    height: 60,
    position: 'absolute',
    marginTop: 50,
    zIndex: 500,
    shadowColor: COLORS.neutral_700,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    borderRadius: 3,
  },
  informationHeader: {
    color: COLORS.neutral_500,
    marginTop: 15,
    marginLeft: 15,
    fontWeight: '700',
  },
  informationBody: {
    color: COLORS.neutral_500,
    marginLeft: 15,
  },
  onLoadDataHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  loadingData: {
    display: 'flex',
    marginLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 15,
    left: 5,
    fontStyle: 'normal',
    fontWeight: '700',
    borderColor: COLORS.neutral_500,
  },
  icon: {
    width: 20,
    height: 20,
    flexShrink: 0,
    alignItems: 'flex-end',
  },
  onLoadDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
    verticalAlign: 'middle',
    flexDirection: 'row',
    padding: 10,
  },
  emptyCenteredView: {
    flex: 1,
    marginTop: -60,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstBlock: {
    marginTop: 0,
  },
  cartProductsScroll: {
    height: 'auto',
    backgroundColor: COLORS.neutral_100,
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
    backgroundColor: COLORS.neutral_0,
    marginTop: 15,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 160,
    width: 320,
    shadowColor: COLORS.neutral_500,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
  },
  productCardSum: {
    flex: 1,
    backgroundColor: COLORS.neutral_100,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    height: 165,
    width: 320,
    shadowColor: COLORS.neutral_500,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
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
  secureBlock: {},
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
    color: COLORS.neutral_500,
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
    left: 10,
    position: 'absolute',
  },
  productInfoBar: {
    display: 'flex',
    position: 'absolute',
    width: 'auto',
    left: 110,
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
  productDescription: {
    fontFamily: 'Roboto',
    color: COLORS.neutral_700,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
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
    marginTop: 10,
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
    alignItems: 'flex-end',
  },
  deleteButton: {
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  plusButton: {
    width: 20,
    alignItems: 'center',
    borderRadius: 25,
    borderColor: COLORS.neutral_300,
    borderWidth: 1,
    height: 20,
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
    width: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: COLORS.neutral_300,
    borderWidth: 1,
    height: 20,
    justifyContent: 'center',
  },
});
