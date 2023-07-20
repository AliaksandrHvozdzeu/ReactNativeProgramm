import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

type chooseColorModalProps = {
  navigation: any;
};

const ChooseColorModal = ({navigation}: chooseColorModalProps) => {
  const shadowStyles = Platform.select({
    ios: {
      shadowColor: COLORS.neutral_700,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 2,
      shadowRadius: 4,
      backgroundColor: COLORS.blue_500,
      borderRadius: 3,
      zIndex: 1,
    },
    android: {
      shadowColor: COLORS.neutral_700,
      shadowRadius: 4,
      elevation: 10,
      backgroundColor: COLORS.blue_500,
      borderRadius: 3,
      zIndex: 1,
    },
  });

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View>
          <Image source={require('../../assets/error.png')} />
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
            buttonStyle={shadowStyles}
            containerStyle={{
              marginTop: 10,
              width: 125,
            }}
            onPress={() => navigation.goBack()}
            title="OK"
          />
        </View>
      </View>
    </View>
  );
};

export default ChooseColorModal;
