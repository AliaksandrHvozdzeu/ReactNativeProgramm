import React from 'react';
import {Platform, View} from 'react-native';
import {styles} from './styles';
import Bar from '../bar';
import {COLORS} from '../../utils/colors';
import ProductDetailsData from '../productDetailsData/ProductDetailsData';

type productDetailsProps = {
  route: string;
  navigation: any;
};

const ProductDetails = ({route, navigation}: productDetailsProps) => {
  //const [product, setProduct] = useState({});

  const {slug, images, included} = route.params;

  const shadowStyles = Platform.select({
    ios: {
      shadowColor: COLORS.neutral_700,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 2,
      shadowRadius: 4,
      backgroundColor: COLORS.blue_500,
    },
    android: {
      shadowColor: COLORS.neutral_700,
      shadowRadius: 4,
      elevation: 10,
      backgroundColor: COLORS.blue_500,
    },
  });

  return (
    <View style={styles.layout}>
      <Bar
        text="Product details"
        isSearch={true}
        isLike={true}
        style={shadowStyles}
        isCard={true}
        navigation={navigation}
      />
      {slug && (
        <ProductDetailsData
          id={slug.id}
          navigation={navigation}
          name={slug.attributes.name}
          currency={slug.attributes.currency}
          display_price={slug.attributes.display_price}
          description={slug.attributes.description}
          included={included}
          images={images}
        />
      )}
    </View>
  );
};

export default ProductDetails;
