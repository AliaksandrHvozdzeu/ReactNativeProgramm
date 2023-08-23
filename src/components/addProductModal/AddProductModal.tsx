import React, {useCallback} from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {SUCCESS_PNG_PATH} from '../../utils/images';
import {useNavigation} from '@react-navigation/native';

type ModalProps = {};

const AddProductModal: React.FC<ModalProps> = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View>
          <Image source={SUCCESS_PNG_PATH} />
        </View>
        <View>
          <Text style={styles.modalText}>Product added to your cart</Text>
        </View>
        <View>
          <Button
            buttonStyle={Platform.select({
              ios: styles.ios,
              android: styles.android,
            })}
            containerStyle={styles.containerStyle}
            onPress={onPress}
            title="OK"
          />
        </View>
      </View>
    </View>
  );
};

export default AddProductModal;
