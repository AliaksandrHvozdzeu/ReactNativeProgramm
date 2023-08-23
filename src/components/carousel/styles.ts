import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  carouselImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    marginBottom: 30,
    zIndex: 0,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: COLORS.neutral_700,
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
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 250,
    shadowColor: COLORS.neutral_1000,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
