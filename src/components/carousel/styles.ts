import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  dotBar: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    bottom: -10,
    marginLeft: 10,
    marginRight: 30,
    fontWeight: '700',
  },
  dotNotActive: {
    color: COLORS.neutral_500,
  },
  dotActive: {
    color: COLORS.blue_500,
  },
  image: {
    width: 250,
    height: 250,
  },
  carouselLeftButton: {
    position: 'absolute',
    right: 25,
    top: 100,
  },
  carouselLeftButtonIcon: {
    color: COLORS.neutral_500,
  },
  carouselRightButton: {
    position: 'absolute',
    left: 25,
    top: 100,
  },
  carouselRightButtonIcon: {
    color: COLORS.neutral_500,
  },
  carouselImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    marginTop: 30,
    marginBottom: 30,
  },
});
