import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  bgImageWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  ios: {
    shadowColor: COLORS.neutral_700,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.neutral_700,
  },
  android: {
    shadowColor: COLORS.neutral_700,
    shadowRadius: 4,
    backgroundColor: COLORS.blue_500,
  },
  image: {
    flex: 1,
    height: 300,
  },
  carouselItem: {
    width: 250,
    height: 500,
    alignItems: 'center',
    marginTop: 120,
  },
  itemsElements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselLeftButtonIcon: {
    color: COLORS.neutral_500,
  },
  carouselRightButton: {
    width: 50,
    marginLeft: 5,
  },
  carouselLeftButton: {
    width: 50,
    marginRight: 5,
  },
  carouselRightButtonIcon: {
    color: COLORS.neutral_500,
  },
  imageContainer: {
    borderRadius: 5,
  },
});
