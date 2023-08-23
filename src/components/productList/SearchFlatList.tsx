import React, {useCallback, useMemo} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {styles} from './styles';
import STRING_UTILS from '../../utils/StringUtils';
import {getIncludedImageById} from '../../api/ImageApi';
import ProductSearchListCard from '../productSearchListCard';
import {useNavigation} from '@react-navigation/native';
import Loading from '../loading';

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

  const renderItem = useCallback(
    (item: {
      attributes: {
        name: string;
        display_price: string;
        currency: string;
        slug: string;
        description: string;
      };
      relationships: {images: {data: {id: string}[]}};
    }) => {
      return (
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
        numColumns={1}
        onRefresh={onRefresh}
        refreshControl={refreshControl}
        style={styles.flatStyle}
        refreshing={isRefreshing}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    );
  }
};

export default SearchFlatList;
