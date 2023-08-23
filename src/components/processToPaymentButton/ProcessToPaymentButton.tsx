import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './styles';
import {getXSpreeToken} from '../../api/ProductsApi';

type ProcessToPaymentButtonProps = {
  token: string;
};

const ProcessToPaymentButton = ({token}: ProcessToPaymentButtonProps) => {
  const [xSpreeToken, setXSpreeToken] = useState('');

  const onProceedToPayment = () => {
    getXSpreeToken(token).then(json => {
      setXSpreeToken(json.data.attributes.token);
    });
  };

  return (
    <View style={styles.buttonViewStyle}>
      <Button
        title="PROCEED TO PAYMENT"
        buttonStyle={styles.ios}
        containerStyle={styles.containerStyle}
        titleStyle={styles.titleStyle}
        onPress={() => onProceedToPayment()}
      />
    </View>
  );
};

export default ProcessToPaymentButton;
