import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import Bar from '../bar';

type MyCartEmptyProps = {};

const GOOD_PNG_PATH: string = '../../assets/good.png';

const MyCartEmpty: React.FC<MyCartEmptyProps> = ({navigation}) => (
  <View style={styles.centeredView}>
    <Bar
      text="My Cart"
      isSearch={true}
      isLike={false}
      isCard={false}
      navigation={navigation}
    />
    <View style={styles.centeredView}>
      <View>
        <View style={styles.imageProfile}>
          <View style={styles.imageView}>
            <Image source={require(GOOD_PNG_PATH)} />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.modalText}>Your Cart is Empty!</Text>
      </View>
      <Text style={styles.modalDescription}>Add product in your cart now</Text>
      <View>
        <Button
          buttonStyle={Platform.select({
            ios: styles.ios,
            android: styles.android,
          })}
          containerStyle={styles.containerStyle}
          onPress={() => navigation.navigate('Main')}
          title="SHOP NOW"
        />
      </View>
    </View>
  </View>
);

export default MyCartEmpty;
