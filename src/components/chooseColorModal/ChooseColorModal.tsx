import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';

type ChooseColorModalProps = {};

const ERROR_PNG_PATH: string = '../../assets/error.png';

const ChooseColorModal: React.FC<ChooseColorModalProps> = ({navigation}) => (
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <View>
        <Image source={require(ERROR_PNG_PATH)} />
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

export default ChooseColorModal;
