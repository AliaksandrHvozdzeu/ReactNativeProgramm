import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: 'auto',
    alignItems: 'center',
  },
  firstBlock: {
    marginTop: 30,
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
  image: {
    marginLeft: -5,
  },
  imageProfile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
