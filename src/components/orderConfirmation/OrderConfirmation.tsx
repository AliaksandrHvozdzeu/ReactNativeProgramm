import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {GOOD_PNG_PATH} from '../../utils/images';
import {useNavigation} from '@react-navigation/native';

type OrderConfirmationProps = {};

const OrderConfirmation: React.FC<OrderConfirmationProps> = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <View style={styles.centeredView}>
        <View style={styles.view90}>
          <Text style={styles.text}>Order Confirmation</Text>
        </View>
        <View>
          <View style={styles.imageProfile}>
            <View style={styles.imageView}>
              <Image source={GOOD_PNG_PATH} />
            </View>
          </View>
        </View>
        <View style={styles.view90}>
          <Text style={styles.modalText}>
            Thank you for placing your order with us!
          </Text>
        </View>
        <View style={styles.view70}>
          <Text style={styles.modalDescription}>
            Please check your email for more details. For any questions and
            further information please contact our customer support.
          </Text>
        </View>
        <View>
          <Button
            buttonStyle={styles.ios}
            containerStyle={styles.containerStyle}
            onPress={() => navigation.navigate('Root')}
            title="CONTINUE SHOPPING"
          />
        </View>
      </View>
    </View>
  );
};

export default OrderConfirmation;
