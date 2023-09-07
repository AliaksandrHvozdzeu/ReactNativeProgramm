import React, {useCallback} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {SUCCESS_PNG_PATH} from '../../utils/images';
import {useNavigation} from '@react-navigation/native';

type AddProductWishModalProps = {};

const AddProductWishModal: React.FC<AddProductWishModalProps> = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View>
          <Image source={SUCCESS_PNG_PATH} alt="success_png_path" />
        </View>
        <View>
          <Text style={styles.modalText}>
            Product added to your wishlist successfully
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
      </View>
    </View>
  );
};

export default AddProductWishModal;
