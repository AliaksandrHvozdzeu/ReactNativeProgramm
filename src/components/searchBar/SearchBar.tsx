import React from 'react';
import {Platform, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

type inputType = {
  searchFilterFunction: any;
  search: string;
};

const SearchBar = ({searchFilterFunction, search}: inputType) => {
  const searchBarStyles = Platform.select({
    ios: {
      shadowColor: '#8F8F8F',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 2,
      shadowRadius: 4,
    },
    android: {
      shadowColor: '#8F8F8F',
      shadowRadius: 4,
      elevation: 10,
    },
  });

  const inputStyles = Platform.select({
    ios: {
      top: 7,
    },
    android: {
      top: -7,
    },
  });

  return (
    <View style={[styles.layout, searchBarStyles]}>
      <View style={styles.inputBar}>
        <TextInput
          style={[styles.input, inputStyles]}
          onChangeText={(text: string) => {
            searchFilterFunction(text);
            console.log(text);
          }}
          value={search}
          placeholder="Search Here"
        />
        <View style={styles.searchIcon}>
          <Icon
            style={styles.cart}
            type="material"
            name="search"
            color={styles.cart.color}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
