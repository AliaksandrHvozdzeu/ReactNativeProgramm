import React from 'react';
import {View} from 'react-native';
import StatusBar from '../statusBar';
import {styles} from './styles';

type TopBarProps = {};

const TopBar: React.FC<TopBarProps> = () => (
  <View style={styles.layout}>
    <StatusBar />
  </View>
);

export default TopBar;
