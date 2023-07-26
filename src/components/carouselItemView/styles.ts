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
  image: {
    flex: 1,
    height: 300,
  },
  carouselItem: {
    width: 250,
    height: 500,
    alignItems: 'center',
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
