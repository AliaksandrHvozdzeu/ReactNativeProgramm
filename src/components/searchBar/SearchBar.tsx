import React, {useState} from 'react';
import {Platform, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

type searchData = {
  data: {
    id: string;
    title: string;
    price: string;
    discount: string;
    percent: string;
    avatar: string;
  }[];
};

const SearchBar = ({data}: searchData, {newData}: searchData) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([{}]);

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

  const searchFilterFunction = (text: string) => {
    console.log(text);
    if (text) {
      const newData = data.filter(function (item: {title: string}) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(data);
      setSearch(text);
    }
  };

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
