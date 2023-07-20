import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {styles} from './styles';
import ProductListCard from '../productListCard';
import SearchBar from '../searchBar';
import ProductSearchListCard from '../productSearchListCard';
import STRING_UTILS from '../../utils/StringUtils';
import {getProductList} from '../../api/ProductsApi';
import Bar from '../bar';

type productListProps = {
  navigation: any;
};

const ProductList = ({navigation}: productListProps) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
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

  const getImageById = (imageId: string) => {
    return `https://picsum.photos/id/${imageId}/3670/2462`;
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    getDataFromApi();
    setIsRefreshing(false);
  };

  const searchFilterFunction = (text: string) => {
    console.log(text);
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
    return (
      <FlatList
        data={filteredDataSource.length === 0 ? data : filteredDataSource}
        numColumns={2}
        onRefresh={onRefresh}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        refreshing={isRefreshing}
        renderItem={({item}) => (
          <ProductListCard
            title={STRING_UTILS.shortTitle(item.attributes.name)}
            src={getImageById(item.relationships.images.data[0].id)}
            price={item.attributes.display_price}
            currency={item.attributes.currency}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  const searchResultFlatList = () => {
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
            src={getImageById(item.relationships.images.data[0].id)}
            price={item.attributes.display_price}
            currency={item.attributes.currency}
            description={STRING_UTILS.shortDescription(
              item.attributes.description,
            )}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  };

  return (
    <View>
      {search.length > 0 && (
        <Bar
          text="Search"
          isSearch={true}
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
