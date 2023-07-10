import React from 'react';
import Bar from '../bar';
import {View} from 'react-native';
import StatusBar from '../statusBar';
import {styles} from './styles';

const TopBar = () => {
  return (
    <View style={styles.layout}>
      <StatusBar />
      <Bar />
    </View>
  );
};

export default TopBar;
