import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/native';
import {WARNING_PNG_PATH} from '../../utils/images';

type LogoutModalProps = {};

const LogoutModal: React.FC<LogoutModalProps> = () => {
  const route = useRoute();
  const {authContext} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View>
          <Image source={WARNING_PNG_PATH} />
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
            buttonStyle={[
              Platform.select({
                ios: styles.ios,
                android: styles.android,
              }),
              styles.cancelButton,
            ]}
            containerStyle={styles.containerStyle}
            onPress={() => navigation.goBack()}
            title="CANCEL"
          />
          <View style={styles.split} />
          <Button
            buttonStyle={[
              Platform.select({
                ios: styles.ios,
                android: styles.android,
              }),
              styles.logoutButton,
            ]}
            containerStyle={styles.containerStyle}
            onPress={() => authContext.signOut()}
            title="LOGOUT"
          />
        </View>
      </View>
    </View>
  );
};

export default LogoutModal;
