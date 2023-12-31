import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  ios: {
    shadowColor: COLORS.neutral_700,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
    borderRadius: 3,
    zIndex: 1,
  },
  android: {
    shadowColor: COLORS.neutral_700,
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
    borderRadius: 3,
    zIndex: 1,
  },
  containerStyle: {
    marginTop: 10,
    width: 125,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: COLORS.neutral_1000,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 0,
  },
  modalText: {
    color: COLORS.neutral_500,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25,
    marginTop: 10,
  },
});
