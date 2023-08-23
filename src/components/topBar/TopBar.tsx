import React from 'react';
import {View} from 'react-native';
import StatusBar from '../statusBar';
import {styles} from './styles';

const TopBar = () => {
  return (
    <View style={styles.layout}>
      <StatusBar />
    </View>
  );
};

export default TopBar;
