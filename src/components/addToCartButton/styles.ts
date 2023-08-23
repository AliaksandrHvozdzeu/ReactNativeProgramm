import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  buttonViewStyle: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    height: 120,
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
  titleStyle: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 1.25,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  containerStyle: {
    width: '100%',
    marginHorizontal: 50,
    marginVertical: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  android: {
    shadowColor: COLORS.neutral_700,
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
    borderRadius: 3,
    zIndex: 1,
  },
});
