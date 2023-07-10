import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const StatusBar = () => {
  return (
    <View style={styles.layout}>
      <View style={styles.statusBar} />
    </View>
  );
};

export default StatusBar;
