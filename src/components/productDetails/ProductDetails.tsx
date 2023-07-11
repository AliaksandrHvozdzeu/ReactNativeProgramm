import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import TopBar from '../topBar';
import ProductDetailsData from '../productDetailsData';

const ProductDetails = () => {
  const DATA = {
    id: '18',
    type: 'product',
    attributes: {
      name: 'Tank Top',
      description:
        'Iure modi facilis vel eaque. Natus dolore vitae officia eum sequi unde quos nesciunt. Delectus sit temporibus optio nam nihil consequatur est perspiciatis. Neque amet labore ipsum iusto. Quidem delectus voluptas ab voluptate exercitationem eaque facilis.',
      available_on: '2021-08-15T04:34:05.172-05:00',
      slug: 'tank-top',
      meta_description: null,
      meta_keywords: null,
      updated_at: '2023-06-23T05:04:00.139-05:00',
      sku: 'T-shirts_tanktop_79.99',
      purchasable: true,
      in_stock: true,
      backorderable: true,
      available: true,
      currency: 'USD',
      price: '79.99',
      display_price: '$79.99',
      compare_at_price: null,
      display_compare_at_price: null,
    },
    relationships: {
      variants: {
        data: [
          {
            id: '134',
            type: 'variant',
          },
        ],
      },
      option_types: {
        data: [
          {
            id: '1',
            type: 'option_type',
          },
          {
            id: '3',
            type: 'option_type',
          },
        ],
      },
      product_properties: {
        data: [
          {
            id: '49',
            type: 'product_property',
          },
          {
            id: '50',
            type: 'product_property',
          },
          {
            id: '51',
            type: 'product_property',
          },
          {
            id: '52',
            type: 'product_property',
          },
          {
            id: '53',
            type: 'product_property',
          },
          {
            id: '54',
            type: 'product_property',
          },
          {
            id: '55',
            type: 'product_property',
          },
          {
            id: '56',
            type: 'product_property',
          },
          {
            id: '219',
            type: 'product_property',
          },
          {
            id: '220',
            type: 'product_property',
          },
        ],
      },
      taxons: {
        data: [
          {
            id: '2',
            type: 'taxon',
          },
          {
            id: '6',
            type: 'taxon',
          },
          {
            id: '22',
            type: 'taxon',
          },
        ],
      },
      images: {
        data: [
          {
            id: '329',
            type: 'image',
          },
        ],
      },
      default_variant: {
        data: {
          id: '134',
          type: 'variant',
        },
      },
      primary_variant: {
        data: {
          id: '18',
          type: 'variant',
        },
      },
    },
  };

  return (
    <View style={styles.layout}>
      <TopBar />
      <ProductDetailsData data={DATA} />
    </View>
  );
};

export default ProductDetails;
