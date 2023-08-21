import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

type ItemRemovedFromCartModalProps = {};

const SUCCESS_PNG_PATH: string = '../../assets/success.png';
const ERROR_PNG_PATH: string = '../../assets/error.png';

const ItemRemovedFromCartModal = ({
  route,
}: ItemRemovedFromCartModalProps) => {
  const {isRemoved} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        {isRemoved ? (
          <>
            <View>
              <Image source={require(SUCCESS_PNG_PATH)} />
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
                buttonStyle={Platform.select({
                  ios: styles.ios,
                  android: styles.android,
                })}
                containerStyle={styles.containerStyle}
                onPress={() => navigation.goBack()}
                title="OK"
              />
            </View>
          </>
        ) : (
          <>
            <View>
              <Image source={require(ERROR_PNG_PATH)} />
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
                buttonStyle={Platform.select({
                  ios: styles.ios,
                  android: styles.android,
                })}
                containerStyle={styles.containerStyle}
                onPress={() => navigation.navigate('MyCart')}
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
