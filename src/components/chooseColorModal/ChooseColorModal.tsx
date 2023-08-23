import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {ERROR_PNG_PATH} from '../../utils/images';

type ChooseColorModalProps = {};

const ChooseColorModal: React.FC<ChooseColorModalProps> = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View>
          <Image source={ERROR_PNG_PATH} />
        </View>
        <View>
          <Text style={styles.modalText}>Select color</Text>
        </View>
        <View>
          <Text style={styles.modalDescription}>
            Please select your color to add this item in your cart
          </Text>
        </View>
        <View>
          <Button
            buttonStyle={styles.ios}
            containerStyle={styles.containerStyle}
            onPress={() => navigation.goBack()}
            title="OK"
          />
        </View>
      </View>
    </View>
  );
};

export default ChooseColorModal;
