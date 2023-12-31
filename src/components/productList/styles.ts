import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const SCREEN_HEIGHT = Dimensions.get('screen').height - 100;

// 20

export const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    width: 'auto',
    height: SCREEN_HEIGHT,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingTop: 5,
    gap: 5,
    backgroundColor: COLORS.neutral_100,
  },
  loadingData: {
    display: 'flex',
    marginLeft: 10,
    fontFamily: 'Roboto',
    fontSize: 15,
    left: 5,
    fontStyle: 'normal',
    fontWeight: '700',
    borderColor: COLORS.neutral_500,
  },
  onLoadDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
    verticalAlign: 'middle',
    flexDirection: 'row',
    padding: 10,
  },
  onLoadDataHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  searchBarLayout: {
    display: 'flex',
    width: 'auto',
    height: 74,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: COLORS.neutral_100,
    zIndex: 1,
  },
  container: {
    flex: 1,
    marginTop: 30,
    height: 'auto',
    zIndex: 0,
  },
  title: {
    fontSize: 32,
  },
  inputBar: {
    display: 'flex',
    width: 335,
    height: 34,
    paddingLeft: 10,
    paddingRight: 300,
    paddingTop: 5,
    paddingBottom: 4,
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: COLORS.neutral_500,
    borderWidth: 1,
  },
  input: {
    display: 'flex',
    width: 335,
    marginLeft: 0,
    paddingLeft: 35,
    paddingRight: 10,
    top: 7,
    textAlign: 'left',
    position: 'absolute',
  },
  searchIcon: {
    display: 'flex',
    width: 25,
    height: 25,
    paddingLeft: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexShrink: 0,
    position: 'absolute',
    left: 5,
    top: 5,
  },
  cart: {
    width: 25,
    height: 25,
    flexShrink: 0,
    color: COLORS.neutral_500,
  },
  flatStyle: {
    width: '100%',
    paddingRight: 10,
  },
});
