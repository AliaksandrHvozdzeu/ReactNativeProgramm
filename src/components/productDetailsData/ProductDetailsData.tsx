import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import AddToCartButton from '../addToCartButton';
import Carousel from '../carousel';
import {getImageById} from '../../api/ImageApi';
import {COLORS} from '../../utils/colors';

type productDetailsDataProps = {
  id: string;
  name: string;
  display_price: string;
  currency: string;
  description: string;
  token: string;
  navigation: any;
  included: {};
  images: {};
  buttonColors: [];
};

const ProductDetailsData = ({
  id,
  name,
  display_price,
  currency,
  description,
  navigation,
  included,
  images,
  token,
  buttonColors,
}: productDetailsDataProps) => {
  const [selectColor, setSelectColor] = useState('');

  const getButtonColor = (color: string) => {
    return {
      backgroundColor: color,
      borderRadius: 0,
      flex: 1,
      height: 30,
      width: 60,
    };
  };

  const getButtonColorTitle = (title: string) => {
    return title.replace('_', ' ');
  };

  const getColorButtonTitleStyle = (colorName: string) => {
    return colorName === 'white'
      ? {
          color: COLORS.neutral_1000,
          fontSize: 10,
        }
      : {
          fontSize: 10,
        };
  };

  console.log(token);

  return (
    <View style={styles.productDetailsDataLayout}>
      <ScrollView>
        <View style={styles.layout}>
          <Carousel
            id={id}
            data={getImageById(id)}
            imageHeight={250}
            imageWidth={250}
            imageTopPosition={30}
            leftButtonTopPosition={100}
            rightButtonTopPosition={100}
            navigation={navigation}
            included={included}
            images={images}
          />
          <View style={styles.productInfoBar}>
            <View style={styles.productSection}>
              <Text style={styles.productName}>{name}</Text>
              <View style={styles.coastBar}>
                <Text style={styles.price}>
                  {display_price} {currency}
                </Text>
              </View>
            </View>
            <View style={styles.horizontalLine} />
            <View>
              <Text style={styles.selectColorSection}>Select color</Text>
              <View style={styles.buttonGroups}>
                {buttonColors &&
                  buttonColors.map((button, index) => (
                    <View style={styles.buttonView}>
                      <Button
                        key={index}
                        title={getButtonColorTitle(button.colorName)}
                        style={styles.selectColorButton}
                        buttonStyle={getButtonColor(button.color)}
                        titleStyle={getColorButtonTitleStyle(button.colorName)}
                        onPress={() => setSelectColor('blue')}
                      />
                    </View>
                  ))}
              </View>
            </View>
            <View style={styles.horizontalLine} />
            <View>
              <Text style={styles.descriptionSection}>Description</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <AddToCartButton
        navigation={navigation}
        id={id}
        token={token}
        selectColor={selectColor}
      />
    </View>
  );
};

export default ProductDetailsData;
