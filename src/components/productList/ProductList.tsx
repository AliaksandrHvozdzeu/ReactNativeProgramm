import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {styles} from './styles';
import ProductListCard from '../productListCard';
import SearchBar from '../searchBar';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetch('https://demo.spreecommerce.org/api/v2/storefront/products')
      .then(response => response.json())
      .then(json => {
        setData(json.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
    getDataFromApi();
    setIsRefreshing(false);
  };

  const getDataFromApi = () => {
    fetch('https://demo.spreecommerce.org/api/v2/storefront/products')
      .then(response => response.json())
      .then(json => {
        console.log('START REFRESH');
        setData(json.data);
        console.log('END REFRESH');
      })
      .catch(error => {
        console.error(error);
      });
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

  const getImageById = (imageId: string) => {
    return `https://picsum.photos/id/${imageId}/3670/2462`;
  };

  const shortTitle = (title: string) => {
    return title.length > 15 ? `${title.slice(0, 10)}...` : title;
  };

  return (
    <View>
      <SearchBar searchFilterFunction={searchFilterFunction} search={search} />
      <View style={styles.layout}>
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
              title={shortTitle(item.attributes.name)}
              src={getImageById(item.relationships.images.data[0].id)}
              price={item.attributes.display_price}
              currency={item.attributes.currency}
              percent={item.percent}
              available={item.attributes.available}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ProductList;
