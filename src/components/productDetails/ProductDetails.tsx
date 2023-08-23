import React, { useEffect, useState } from "react";
import {Platform, View} from 'react-native';
import {styles} from './styles';
import Bar from '../bar';
import {COLORS} from '../../utils/colors';
import STRING_UTILS from '../../utils/StringUtils';
import ProductDetailsData from '../productDetailsData/ProductDetailsData';

type productDetailsProps = {
  route: string;
  navigation: any;
};

const ProductDetails = ({route, navigation}: productDetailsProps) => {

  const [buttonColors, setButtonColors] = useState([]);

  const {slug, images, included, token, productColors, productIncluded} =
    route.params;

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
          description={STRING_UTILS.replaceTags(slug.attributes.description)}
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
