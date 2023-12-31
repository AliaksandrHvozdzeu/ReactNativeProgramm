import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import SizeAndPositionUtils from '../../utils/SizeAndPositionUtils';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
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
  label: {
    marginBottom: 60,
  },
  containerStyle: {
    marginTop: 10,
    width: 300,
  },
  icon: {
    name: 'arrowright',
    type: 'antdesign',
    size: 15,
    color: 'white',
  },
  titleStyle: {
    marginHorizontal: 20,
    color: COLORS.neutral_100,
  },
  container: {
    height: 40,
    width: 300,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.neutral_500,
    borderRadius: 3,
    shadowColor: COLORS.neutral_700,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
  },
  iosButtonPosition: {
    bottom: SizeAndPositionUtils.heightPosition(85),
  },
  androidButtonPosition: {
    bottom: SizeAndPositionUtils.heightPosition(105),
  },
  buttonViewStyle: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
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
  forgotPasswordLink: {
    color: COLORS.blue_300,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 50,
    left: 10,
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
