import React from 'react';
import {View} from 'react-native';
import TopBar from '../topBar';
import {styles} from './styles';
import SearchBar from '../searchBar';

const Main = () => {
  return (
    <View style={styles.main}>
      <TopBar />
      <SearchBar />
    </View>
  );
};

export default Main;
