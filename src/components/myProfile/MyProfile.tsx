import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import {Button} from 'react-native-elements';
import Bar from '../bar';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

type myProfileProps = {
  route: any;
  navigation: any;
};

const MyProfile = ({route, navigation}: myProfileProps) => {
  const [userData, setUserData] = useState();
  const {authContext, userName, token} = route.params;
  const [isEdit, setEdit] = useState(false);
  const [city, setCity] = useState('');
  const [flat, setFlat] = useState('');
  const [location, setLocation] = useState('');
  const [mobile, setMobile] = useState('');
  const [fullName, setFullName] = useState('');
  const [userLogoUri, setUserLogoUri] = useState('');

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

    const getUserLogo = async () => {
      try {
        let uri: string = await AsyncStorage.getItem('userLogo');
        setUserLogoUri(uri);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
    getUserLogo();
    console.log(userLogoUri);
  }, []);

  const onChangeFullName = (value: string) => {
    setFullName(value);
    setEdit(true);
  };

  const onChangeMobile = (value: string) => {
    setMobile(value);
    setEdit(true);
  };

  const onChangeCity = (value: string) => {
    setCity(value);
    setEdit(true);
  };

  const onChangeLocation = (value: string) => {
    setLocation(value);
    setEdit(true);
  };

  const onChangeFlat = (value: string) => {
    setFlat(value);
    setEdit(true);
  };

  const onUpdate = () => {
    fetch('https://demo.spreecommerce.org/api/v2/storefront/account', {
      method: 'PATCH',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        user: {
          first_name: fullName?.split(' ')[0],
          last_name: fullName?.split(' ')[1],
          address1: location,
          address2: flat,
          city: city,
          phone: mobile,
        },
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data));
      });
    setEdit(false);
  };

  const UpdateButton = () => {
    if (isEdit) {
      return (
        <Button
          buttonStyle={shadowStyles}
          containerStyle={{
            marginTop: 10,
            width: 300,
          }}
          onPress={onUpdate}
          title="UPDATE"
        />
      );
    }
  };

  const onChoosePhoto = () => {
    let options = {
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        storeUserLogo(response.assets[0].uri);
      }
    });
  };

  const storeUserLogo = async (value: string) => {
    try {
      await AsyncStorage.setItem('userLogo', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

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
                // ref={fullNameRef}
                style={styles.input}
                defaultValue={`${userData[0].attributes?.firstname} ${userData[0].attributes?.lastname}`}
                onChangeText={value => onChangeFullName(value)}
              />
            </View>
            <TouchableOpacity onPress={() => onChoosePhoto()}>
              <View style={styles.imageProfile}>
                <View style={styles.imageView}>
                  <Image source={userLogoUri} style={styles.image} />
                </View>
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.inputName}>Mobile Number</Text>
              <TextInput
                style={styles.input}
                defaultValue={userData[0].attributes?.phone}
                onChangeText={value => onChangeMobile(value)}
              />
            </View>
            <View>
              <Text style={styles.inputName}>City</Text>
              <TextInput
                style={styles.input}
                defaultValue={userData[0].attributes?.city}
                onChangeText={value => onChangeCity(value)}
              />
            </View>
            <View>
              <Text style={styles.inputName}>Location, area or street</Text>
              <TextInput
                style={styles.input}
                defaultValue={userData[0].attributes?.address1}
                onChangeText={value => onChangeLocation(value)}
              />
            </View>
            <View>
              <Text style={styles.inputName}>Flat no., Building name</Text>
              <TextInput
                style={styles.input}
                defaultValue={userData[0].attributes?.address2}
                onChangeText={value => onChangeFlat(value)}
              />
            </View>
          </View>
        )}
        <View>
          {userData && <UpdateButton />}
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
