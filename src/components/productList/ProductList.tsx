import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import ProductListCard from '../productListCard';
import SearchBar from '../searchBar';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Xiaomi Mi A1',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Xiaomi Mi B2',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Xiaomi Mi B3',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1434e29d77',
      title: 'Xiaomi Mi C4',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Xiaomi Mi C5',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'Xiaomi Mi C6',
      price: '$222',
      discount: '$244',
      percent: '25% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571essss7',
      title: 'Xiaomi Mi D7',
      price: '$222',
      discount: '$244',
      percent: '',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
  ];

  const searchFilterFunction = (text: string) => {
    console.log(text);
    if (text) {
      const newData = DATA.filter(function (item: {title: string}) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      // @ts-ignore
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // @ts-ignore
      setFilteredDataSource(DATA);
      setSearch(text);
    }
  };

  return (
    <View>
      <SearchBar searchFilterFunction={searchFilterFunction} search={search} />
      <View style={styles.layout}>
        <FlatList
          data={filteredDataSource.length === 0 ? DATA : filteredDataSource}
          numColumns={2}
          renderItem={({item}) => (
            <ProductListCard
              title={item.title}
              src={item.avatar}
              price={item.price}
              discount={item.discount}
              percent={item.percent}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ProductList;
