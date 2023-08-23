import React, {useCallback} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onLogIn = useCallback(() => {
    navigation.navigate('LogIn');
  }, []);

  return (
    <View style={styles.centeredView}>
      <View style={styles.label}>
        <Text style={styles.text}>Ecommerce Store</Text>
      </View>
      <View>
        <View>
          <Text style={styles.inputName}>Full Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.inputName}>Email Address</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.inputName}>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View>
          <Text style={styles.inputName}>Confirm password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
      </View>
      <View>
        <Button
          buttonStyle={styles.ios}
          containerStyle={styles.containerStyle}
          onPress={goBack}
          title="SIGN UP"
        />
      </View>
      <View>
        <Text style={styles.link} onPress={onLogIn}>
          Already have account? Sign in
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
