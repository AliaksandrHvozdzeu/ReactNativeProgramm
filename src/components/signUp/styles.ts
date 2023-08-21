import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 60
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
    width: 300,
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
});
