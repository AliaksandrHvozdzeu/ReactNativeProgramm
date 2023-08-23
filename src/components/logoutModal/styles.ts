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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
    borderRadius: 3,
    zIndex: 1,
  },
  containerStyle: {
    marginTop: 10,
    width: 120,
  },
  android: {
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
    borderRadius: 3,
    zIndex: 1,
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
  modalDescription: {
    color: COLORS.neutral_500,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    marginTop: 10,
    width: 200,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  split: {
    width: 10,
  },
  cancelButton: {
    backgroundColor: COLORS.accent_red,
  },
  logoutButton: {
    backgroundColor: COLORS.blue_500,
  },
});
