import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import SearchBar from '../searchBar';
import {getFilteredProductList, getProductList} from '../../api/ProductsApi';
import Bar from '../bar';
import ProductListFlatList from './ProductListFlatList';
import SearchFlatList from './SearchFlatList';
import {useNavigation} from '@react-navigation/native';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [included, setIncluded] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigation = useNavigation();

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

  return (
    <View>
      {search.length > 0 ? (
        <Bar
          text="Search"
          isSearch={false}
          isLike={false}
          isCard={true}
          navigation={navigation}
        />
      ) : (
        <Bar
          text="Ecommerce Store"
          isSearch={false}
          isLike={false}
          isCard={true}
          navigation={navigation}
        />
      )}
      <SearchBar searchFilterFunction={searchFunction} search={search} />
      <View style={styles.layout}>
        {search.length > 0 ? (
          <SearchFlatList
            data={data}
            included={included}
            onRefresh={onRefresh}
            isRefreshing={isRefreshing}
            navigation={navigation}
          />
        ) : (
          <ProductListFlatList
            data={data}
            included={included}
            onRefresh={onRefresh}
            isRefreshing={isRefreshing}
            navigation={navigation}
          />
        )}
      </View>
    </View>
  );
};

export default ProductList;
