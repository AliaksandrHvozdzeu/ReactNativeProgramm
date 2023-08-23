import React, {useCallback} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ERROR_PNG_PATH, SUCCESS_PNG_PATH} from '../../utils/images';

type ItemRemovedFromCartModalProps = {};

const ItemRemovedFromCartModal: React.FC<
  ItemRemovedFromCartModalProps
> = () => {
  const route = useRoute();
  const {isRemoved} = route.params;
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.goBack();
  }, []);
  const onMyCart = useCallback(() => {
    navigation.navigate('MyCart');
  }, []);
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        {isRemoved ? (
          <>
            <View>
              <Image source={SUCCESS_PNG_PATH} />
            </View>
            <View>
              <Text style={styles.modalText}>Your Cart Status</Text>
            </View>
            <View>
              <Text style={styles.modalDescription}>
                Product removed from your cart successfully
              </Text>
            </View>
            <View>
              <Button
                buttonStyle={styles.ios}
                containerStyle={styles.containerStyle}
                onPress={onPress}
                title="OK"
              />
            </View>
          </>
        ) : (
          <>
            <View>
              <Image source={ERROR_PNG_PATH} />
            </View>
            <View>
              <Text style={styles.modalText}>Your Cart Status</Text>
            </View>
            <View>
              <Text style={styles.modalDescription}>
                Product was not removed from your cart
              </Text>
            </View>
            <View>
              <Button
                buttonStyle={styles.ios}
                containerStyle={styles.containerStyle}
                onPress={onMyCart}
                title="OK"
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default ItemRemovedFromCartModal;
