import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import AddToCartButton from '../addToCartButton';
import Carousel from '../carousel';
import {getImageById} from '../../api/ImageApi';
import ColorsUtils from '../../utils/ColorsUtils';
import {useNavigation} from '@react-navigation/native';

type ProductDetailsDataProps = {
  id: string;
  name: string;
  display_price: string;
  currency: string;
  description: string;
  token: string;
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
  included,
  images,
  token,
  buttonColors,
}: ProductDetailsDataProps) => {
  const [selectColor, setSelectColor] = useState({});
  const navigation = useNavigation();
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
                    <View style={styles.buttonView} key={index}>
                      <Button
                        title={ColorsUtils.getButtonColorTitle(
                          button.colorName,
                        )}
                        style={styles.selectColorButton}
                        buttonStyle={ColorsUtils.getButtonColor(button.color)}
                        titleStyle={ColorsUtils.getColorButtonTitleStyle(
                          button.colorName,
                        )}
                        onPress={() =>
                          setSelectColor({
                            id: button.id,
                            size: 1,
                          })
                        }
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
        id={id}
        token={token}
        selectColor={selectColor}
      />
    </View>
  );
};

export default ProductDetailsData;
