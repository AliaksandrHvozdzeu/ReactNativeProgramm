import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import STRING_UTILS from '../../utils/StringUtils';
import {getIncludedImageById} from '../../api/ImageApi';
import ProductSearchListCard from '../productSearchListCard';
import {useNavigation} from '@react-navigation/native';

type SearchFlatListProp = {
  data: {};
  included: {};
  onRefresh: any;
  isRefreshing: boolean;
};
const SearchFlatList = ({
  data,
  included,
  onRefresh,
  isRefreshing,
}: SearchFlatListProp) => {
  const navigation = useNavigation();
  if (!data) {
    return (
      <View style={[styles.onLoadDataContainer, styles.onLoadDataHorizontal]}>
        <ActivityIndicator size="large" color={COLORS.blue_500} />
        <View>
          <Text style={styles.loadingData}>Loading...</Text>
        </View>
      </View>
    );
  } else {
    return (
      <FlatList
        data={data}
        numColumns={1}
        onRefresh={onRefresh}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        style={styles.flatStyle}
        refreshing={isRefreshing}
        renderItem={({item}) => (
          <ProductSearchListCard
            title={STRING_UTILS.shortString(item.attributes.name, 15)}
            src={getIncludedImageById(
              item.relationships.images.data[0].id,
              included,
            )}
            price={item.attributes.display_price}
            currency={item.attributes.currency}
            navigation={navigation}
            slug={item.attributes.slug}
            images={item.relationships.images.data}
            included={included}
            description={STRING_UTILS.shortString(
              item.attributes.description,
              20,
            )}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }
};

export default SearchFlatList;
