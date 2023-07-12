import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  carouselImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    marginBottom: 30,
  },
  dotBar: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    bottom: -10,
    fontWeight: '700',
  },
  dotNotActive: {
    color: COLORS.neutral_500,
  },
  dotActive: {
    color: COLORS.blue_500,
  },
  carouselLeftButton: {
    position: 'absolute',
    right: 25,
  },
  carouselLeftButtonIcon: {
    color: COLORS.neutral_500,
  },
  carouselRightButton: {
    position: 'absolute',
    left: 25,
  },
  carouselRightButtonIcon: {
    color: COLORS.neutral_500,
  },
  dotStyles: {
    marginRight: -13,
    marginLeft: -13,
  },
  fadingContainer: {

  },
});
