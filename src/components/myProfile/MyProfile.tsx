import React from 'react';
import {Image, Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import {Button} from 'react-native-elements';
import Bar from '../bar';

type myProfileProps = {
  navigation: any;
};

const MyProfile = ({navigation}: myProfileProps) => {
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

  const onUpdate = () => {
    console.log('UPDATE');
  };

  return (
    <View style={styles.centeredView}>
      <Bar
        text="My Profile"
        isSearch={true}
        isLike={false}
        style={shadowStyles}
        isCard={true}
        navigation={navigation}
      />
      <View style={styles.centeredView}>
        <View>
          <View style={styles.firstBlock}>
            <Text style={styles.inputName}>Full Name</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.imageProfile}>
            <View style={styles.imageView}>
              <Image
                source={require('../../assets/photo.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View>
            <Text style={styles.inputName}>Mobile Number</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={styles.inputName}>City</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <View>
            <Text style={styles.inputName}>Location, area or street</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <View>
            <Text style={styles.inputName}>Flat no., Building name</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
        </View>
        <View>
          <Button
            buttonStyle={shadowStyles}
            containerStyle={{
              marginTop: 10,
              width: 300,
            }}
            onPress={onUpdate}
            title="UPDATE"
          />
          <Button
            buttonStyle={shadowStyles}
            containerStyle={{
              marginTop: 10,
              width: 300,
            }}
            onPress={() => navigation.navigate('LogoutModal')}
            title="LOGOUT"
          />
        </View>
      </View>
    </View>
  );
};

export default MyProfile;
