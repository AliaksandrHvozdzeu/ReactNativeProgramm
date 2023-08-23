import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import ProductListCard from '../productListCard';
import SearchBar from '../searchBar';
import ProductSearchListCard from '../productSearchListCard';
import STRING_UTILS from '../../utils/StringUtils';
import {getFilteredProductList, getProductList} from '../../api/ProductsApi';
import Bar from '../bar';
import {getIncludedImageById} from '../../api/ImageApi';
import {COLORS} from '../../utils/colors';

type productListProps = {
  navigation: any;
};

const ProductList = ({navigation}: productListProps) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [included, setIncluded] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = () => {
    getProductList().then(json => {
      setIncluded(json.included);
      setData(json.data);
    });
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    getDataFromApi();
    setIsRefreshing(false);
  };

  const searchFunction = (value: string) => {
    setSearch(value);
    if (search) {
      getFilteredProductList(search).then(json => {
        setIncluded(json.included);
        setData(json.data);
      });
    }
  };

  const flatList = () => {
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
              title={STRING_UTILS.shortTitle(item.attributes.name)}
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

  const searchResultFlatList = () => {
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
              title={STRING_UTILS.shortTitle(item.attributes.name)}
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
              description={STRING_UTILS.shortDescription(
                item.attributes.description,
              )}
            />
          )}
          keyExtractor={item => item.id}
        />
      );
    }
  };

  return (
    <View>
      {search.length > 0 && (
        <Bar
          text="Search"
          isSearch={false}
          isLike={false}
          style={null}
          isCard={true}
          navigation={navigation}
        />
      )}
      {search.length <= 0 && (
        <Bar
          text="Ecommerce Store"
          isSearch={false}
          isLike={false}
          style={null}
          isCard={true}
          navigation={navigation}
        />
      )}
      <SearchBar searchFilterFunction={searchFunction} search={search} />
      <View style={styles.layout}>
        {search.length > 0 && searchResultFlatList()}
        {search.length <= 0 && flatList()}
      </View>
    </View>
  );
};

export default ProductList;
