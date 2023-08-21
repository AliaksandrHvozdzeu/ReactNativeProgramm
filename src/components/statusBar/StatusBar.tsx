import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

type StatusBarProps = {};

const StatusBar: React.FC<StatusBarProps> = () => (
  <View style={styles.layout}>
    <View style={styles.statusBar} />
  </View>
);

export default StatusBar;
