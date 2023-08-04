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
import {getProductList} from '../../api/ProductsApi';
import Bar from '../bar';
import {getIncludedImageById} from '../../api/ImageApi';
import {COLORS} from '../../utils/colors';

type productListProps = {
  navigation: any;
};

const ProductList = ({navigation}: productListProps) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
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

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = data.filter(function (item: {title: string}) {
        const itemData = item.attributes.name
          ? item.attributes.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      // @ts-ignore
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // @ts-ignore
      setFilteredDataSource(data);
      setSearch(text);
    }
  };

  const searchFlatList = () => {
    if (!filteredDataSource) {
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
          data={filteredDataSource.length === 0 ? data : filteredDataSource}
          numColumns={2}
          onRefresh={onRefresh}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
          refreshing={isRefreshing}
          renderItem={({ item }) => (
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
    if (!filteredDataSource) {
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
          data={filteredDataSource.length === 0 ? data : filteredDataSource}
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
              description={STRING_UTILS.shortDescription(
                item.attributes.description,
              )}
              navigation={navigation}
              isWishList={false}
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
      <SearchBar searchFilterFunction={searchFilterFunction} search={search} />
      <View style={styles.layout}>
        {search.length > 0 && searchResultFlatList()}
        {search.length <= 0 && searchFlatList()}
      </View>
    </View>
  );
};

export default ProductList;
