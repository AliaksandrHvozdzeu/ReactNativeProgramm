import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Bar from '../bar';
import STRING_UTILS from '../../utils/StringUtils';
import ProductDetailsData from '../productDetailsData/ProductDetailsData';
import {useNavigation, useRoute} from '@react-navigation/native';

type ProductDetailsProps = {};

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const route = useRoute;
  const {slug, images, included, token, productColors, productIncluded} =
    route.params;
  const [buttonColors, setButtonColors] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    let buttonColorsArray = [];
    for (let i = 0; i < productIncluded.length; i++) {
      let color = productIncluded[i].attributes.options_text
        .split(',')[0]
        .replace('Color: ', '');
      const attributeName = productColors[0].name;
      if (attributeName === 'color') {
        const colorArray = productColors[0].option_values;
        if (colorArray) {
          for (let j = 0; j < colorArray.length; j++) {
            const colorName = colorArray[j].name;
            if (color === colorName) {
              const item = {
                id: colorArray[j].id,
                colorName: colorArray[j].name,
                color: colorArray[j].presentation,
              };
              buttonColorsArray.push(item);
            }
          }
        }
      }
    }
    setButtonColors(buttonColorsArray);
  }, []);

  return (
    <View style={styles.layout}>
      <Bar text="Product details" isSearch={true} isLike={true} isCard={true} />
      {slug && (
        <ProductDetailsData
          id={slug?.id}
          navigation={navigation}
          name={slug?.attributes?.name}
          currency={slug?.attributes?.currency}
          display_price={slug?.attributes?.display_price}
          description={STRING_UTILS.replaceTags(slug?.attributes?.description)}
          included={included}
          images={images}
          token={token}
          buttonColors={buttonColors}
        />
      )}
    </View>
  );
};

export default ProductDetails;
