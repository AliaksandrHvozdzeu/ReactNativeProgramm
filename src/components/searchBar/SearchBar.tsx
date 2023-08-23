import React from 'react';
import {Keyboard, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

type InputTypeProps = {
  searchFilterFunction: any;
  search: string;
};

const SearchBar: React.FC<InputTypeProps> = ({
  searchFilterFunction,
  search,
}) => (
  <View style={styles.layout}>
    <View style={styles.inputBar}>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => {
          searchFilterFunction(text);
        }}
        value={search}
        placeholder="Search Here"
        onSubmitEditing={Keyboard.dismiss}
        autoFocus={true}
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

export default SearchBar;
