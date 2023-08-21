import React from 'react';
import {Platform, Keyboard, TextInput, View} from 'react-native';
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
  <View
    style={[
      styles.layout,
      Platform.select({
        ios: styles.ios,
        android: styles.android,
      }),
    ]}>
    <View style={styles.inputBar}>
      <TextInput
        style={[
          styles.input,
          Platform.select({
            ios: styles.inputStylesIos,
            android: styles.inputStylesAndroid,
          }),
        ]}
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
