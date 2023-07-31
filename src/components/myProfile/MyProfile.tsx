import React, {useEffect, useState} from 'react';
import {Image, Platform, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import {Button} from 'react-native-elements';
import Bar from '../bar';

type myProfileProps = {
  route: any;
  navigation: any;
};

const MyProfile = ({route, navigation}: myProfileProps) => {
  const [userData, setUserData] = useState();
  const {authContext, userName, token} = route.params;

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

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        `https://demo.spreecommerce.org/api/v2/storefront/account?user=${userName}&include=default_billing_address,default_shipping_address`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
      const content = await response.json();
      setUserData(content.included);
    };
    getUserData();
  }, []);

  const onUpdate = () => {};

  return (
    <View style={styles.centeredView}>
      <Bar
        text="My Profile"
        isSearch={true}
        isLike={false}
        style={shadowStyles}
        isCard={false}
        navigation={navigation}
      />
      <View style={styles.centeredView}>
        {userData && (
          <View>
            <View style={styles.firstBlock}>
              <Text style={styles.inputName}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={`${userData[0].attributes?.firstname} ${userData[0].attributes?.lastname}`}
              />
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
              <TextInput
                style={styles.input}
                value={userData[0].attributes?.phone}
              />
            </View>
            <View>
              <Text style={styles.inputName}>City</Text>
              <TextInput
                style={styles.input}
                value={userData[0].attributes?.city}
              />
            </View>
            <View>
              <Text style={styles.inputName}>Location, area or street</Text>
              <TextInput
                style={styles.input}
                value={userData[0].attributes?.address1}
              />
            </View>
            <View>
              <Text style={styles.inputName}>Flat no., Building name</Text>
              <TextInput
                style={styles.input}
                value={userData[0].attributes?.address2}
              />
            </View>
          </View>
        )}
        <View>
          {userData && (
            <Button
              buttonStyle={shadowStyles}
              containerStyle={{
                marginTop: 10,
                width: 300,
              }}
              onPress={onUpdate}
              title="UPDATE"
            />
          )}
          <Button
            buttonStyle={shadowStyles}
            containerStyle={{
              marginTop: 10,
              width: 300,
            }}
            onPress={() =>
              navigation.navigate('LogoutModal', {
                authContext: authContext,
              })
            }
            title="LOGOUT"
          />
        </View>
      </View>
    </View>
  );
};

export default MyProfile;
