import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    width: 'auto',
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingTop: 5,
    gap: 5,
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
});
