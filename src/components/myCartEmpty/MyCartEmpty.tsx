import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import Bar from '../bar';
import {GOOD_PNG_PATH} from '../../utils/images';
import {useNavigation} from '@react-navigation/native';

type MyCartEmptyProps = {};

const MyCartEmpty: React.FC<MyCartEmptyProps> = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Bar text="My Cart" isSearch={true} isLike={false} isCard={false} />
      <View style={styles.centeredView}>
        <View>
          <View style={styles.imageProfile}>
            <View style={styles.imageView}>
              <Image source={GOOD_PNG_PATH} />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.modalText}>Your Cart is Empty!</Text>
        </View>
        <Text style={styles.modalDescription}>
          Add product in your cart now
        </Text>
        <View>
          <Button
            buttonStyle={styles.ios}
            containerStyle={styles.containerStyle}
            onPress={() => navigation.navigate('Main')}
            title="SHOP NOW"
          />
        </View>
      </View>
    </View>
  );
};

export default MyCartEmpty;
