import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import ProductListCard from '../productListCard';

const ProductList = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Xiaomi Mi A3',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Xiaomi Mi A3',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Xiaomi Mi A3',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-1434e29d77',
      title: 'Xiaomi Mi A3',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Xiaomi Mi A3',
      price: '$222',
      discount: '$244',
      percent: '9% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'Xiaomi Mi A3',
      price: '$222',
      discount: '$244',
      percent: '25% off',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571essss7',
      title: 'Xiaomi Mi A3',
      price: '$222',
      discount: '$244',
      percent: '',
      avatar:
        'https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw',
    },
  ];

  return (
    <View style={styles.layout}>
      <FlatList
        data={DATA}
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
  );
};

export default ProductList;
