import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const SLIDER_WIDTH = Dimensions.get('window').width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

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
  fadingContainer: {},
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
