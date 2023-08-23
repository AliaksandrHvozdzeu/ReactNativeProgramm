import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  onLoadDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
    verticalAlign: 'middle',
    flexDirection: 'row',
    padding: 10,
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
});
