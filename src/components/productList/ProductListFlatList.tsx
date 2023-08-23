import React, {useCallback, useMemo} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import ProductListCard from '../productListCard';
import STRING_UTILS from '../../utils/StringUtils';
import {getIncludedImageById} from '../../api/ImageApi';
import {useNavigation} from '@react-navigation/native';
import Loading from '../loading';

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

  const renderItem = useCallback(
    (item: {
      attributes: {
        name: string;
        display_price: string;
        currency: string;
        slug: string;
      };
      relationships: {images: {data: {id: string}[]}};
    }) => {
      return (
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
      );
    },
    [],
  );

  const refreshControl = useMemo(() => {
    return <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />;
  }, []);

  if (!data) {
    return <Loading />;
  } else {
    return (
      <FlatList
        data={data}
        numColumns={2}
        onRefresh={onRefresh}
        refreshControl={refreshControl}
        refreshing={isRefreshing}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    );
  }
};

export default ProductListFlatList;
