import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {styles} from './styles';
import Bar from '../bar';
import ProductSearchListCard from '../productSearchListCard';
import STRING_UTILS from '../../utils/StringUtils';
import {getProductList} from '../../api/ProductsApi';
import ImageUtils from '../../utils/ImageUtils';
import {useNavigation} from '@react-navigation/native';

const WishList = () => {
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = () => {
    getProductList().then(json => {
      setData(json.data);
    });
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    getDataFromApi();
    setIsRefreshing(false);
  };

  const refreshControl = useMemo(() => {
    return <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />;
  }, []);

  const renderItem = useCallback(
    (item: {
      attributes: {
        name: string;
        display_price: string;
        currency: string;
        description: string;
      };
      relationships: {images: {data: {id: string}[]}};
    }) => {
      return (
        <ProductSearchListCard
          title={STRING_UTILS.shortString(item.attributes.name, 15)}
          src={ImageUtils.getImageById(item.relationships.images.data[0].id)}
          price={item.attributes.display_price}
          currency={item.attributes.currency}
          description={STRING_UTILS.shortString(
            item.attributes.description,
            20,
          )}
          navigation={navigation}
          isWishList={true}
        />
      );
    },
    [],
  );

  return (
    <View>
      <Bar text="My Wish List" isSearch={true} isLike={false} isCard={true} />
      <View style={styles.layout}>
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
      </View>
    </View>
  );
};

export default WishList;
