import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';

type ModalProps = {};

const SUCCESS_PNG_PATH: string = '../../assets/success.png';

const AddProductModal: React.FC<ModalProps> = ({navigation}) => (
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <View>
        <Image source={require(SUCCESS_PNG_PATH)} />
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
          onPress={() => navigation.goBack()}
          title="OK"
        />
      </View>
    </View>
  </View>
);

export default AddProductModal;
