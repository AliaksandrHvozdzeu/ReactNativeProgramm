import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

type logoutModalProps = {
  navigation: any;
};

const LogoutModal = ({navigation}: logoutModalProps) => {
  const shadowStyles = Platform.select({
    ios: {
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 2,
      shadowRadius: 4,
      backgroundColor: COLORS.blue_500,
      borderRadius: 3,
      zIndex: 1,
    },
    android: {
      shadowRadius: 4,
      elevation: 10,
      backgroundColor: COLORS.blue_500,
      borderRadius: 3,
      zIndex: 1,
    },
  });

  const onLogOut = () => {
    console.log('LOGOUT');
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View>
          <Image source={require('../../assets/warning.png')} />
        </View>
        <View>
          <Text style={styles.modalText}>Login To Continue</Text>
        </View>
        <View>
          <Text style={styles.modalDescription}>
            Are you sure want yo logout?
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            buttonStyle={[shadowStyles, styles.cancelButton]}
            containerStyle={{
              marginTop: 10,
              width: 120,
            }}
            onPress={() => navigation.goBack()}
            title="CANCEL"
          />
          <View style={styles.split} />
          <Button
            buttonStyle={[shadowStyles, styles.logoutButton]}
            containerStyle={{
              marginTop: 10,
              width: 120,
            }}
            onPress={onLogOut}
            title="LOGOUT"
          />
        </View>
      </View>
    </View>
  );
};

export default LogoutModal;
