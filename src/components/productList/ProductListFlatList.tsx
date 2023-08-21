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
import ProductListCard from '../productListCard';
import STRING_UTILS from '../../utils/StringUtils';
import {getIncludedImageById} from '../../api/ImageApi';
import {useNavigation} from '@react-navigation/native';

type ProductListFlatListProp = {
  data: {};
  included: {};
  onRefresh: any;
  isRefreshing: boolean;
};
const ProductListFlatList = ({
  data,
  included,
  onRefresh,
  isRefreshing,
}: ProductListFlatListProp) => {
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
        numColumns={2}
        onRefresh={onRefresh}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        refreshing={isRefreshing}
        renderItem={({item}) => (
          <ProductListCard
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
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }
};

export default ProductListFlatList;
