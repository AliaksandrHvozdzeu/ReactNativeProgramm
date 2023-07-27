import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {styles} from './styles';
import Bar from '../bar';
import ProductSearchListCard from '../productSearchListCard';
import STRING_UTILS from '../../utils/StringUtils';
import {getProductList} from '../../api/ProductsApi';

type wishListProps = {
  description: string;
};
const WishList = ({navigation}: wishListProps) => {
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const getImageById = (imageId: string) => {
    return `https://picsum.photos/id/${imageId}/3670/2462`;
  };

  return (
    <View>
      <Bar
        text="My Wish List"
        isSearch={true}
        isLike={false}
        style={null}
        isCard={true}
        navigation={navigation}
      />
      <View style={styles.layout}>
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
              title={STRING_UTILS.shortTitle(item.attributes.name)}
              src={getImageById(item.relationships.images.data[0].id)}
              price={item.attributes.display_price}
              currency={item.attributes.currency}
              description={STRING_UTILS.shortDescription(
                item.attributes.description,
              )}
              navigation={navigation}
              isWishList={true}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default WishList;
