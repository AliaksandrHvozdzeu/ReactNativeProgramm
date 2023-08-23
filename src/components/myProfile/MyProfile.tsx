import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
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
import {Avatar} from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/native';

type MyProfileProps = {};

const MyProfile: React.FC<MyProfileProps> = () => {
  const route = useRoute();
  const [userData, setUserData] = useState();
  const {authContext, userName, token} = route.params;
  const [isEdit, setEdit] = useState(false);
  const [city, setCity] = useState('');
  const [flat, setFlat] = useState('');
  const [location, setLocation] = useState('');
  const [mobile, setMobile] = useState('');
  const [fullName, setFullName] = useState('');
  const [userLogoUri, setUserLogoUri] = useState('');
  const navigation = useNavigation();

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
    AsyncStorage.getItem('userLogo').then(value => {
      setUserLogoUri(value);
    });
    getUserData();
  }, []);

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
        setUserLogoUri(response.assets[0].uri);
      }
    });
  };

  const storeUserLogo = async (value: string) => {
    try {
      await AsyncStorage.setItem('userLogo', value);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserLogoItem = (title: string) => {
    return (
      <TouchableOpacity onPress={() => onChoosePhoto()}>
        <View style={styles.imageProfile}>
          <View style={styles.imageView}>
            <Avatar
              size="large"
              title={title}
              containerStyle={styles.logoContainerStyle}
              avatarStyle={styles.avatarStyle}
              rounded
              activeOpacity={0.7}
              source={{
                uri: userLogoUri,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
        navigation.navigate('MyProfile');
      });
    setEdit(false);
  };

  const UpdateButton = () => {
    if (isEdit) {
      return (
        <Button
          buttonStyle={Platform.select({
            ios: styles.ios,
            android: styles.android,
          })}
          containerStyle={styles.containerStyle}
          onPress={onUpdate}
          title="UPDATE"
        />
      );
    }
  };

  return (
    <View style={styles.centeredView}>
      <Bar
        text="My Profile"
        isSearch={true}
        isLike={false}
        isCard={false}
        navigation={navigation}
      />
      <View style={styles.centeredView}>
        {!userData ? (
          <View
            style={[styles.onLoadDataContainer, styles.onLoadDataHorizontal]}>
            <ActivityIndicator size="large" color={COLORS.blue_500} />
            <View>
              <Text style={styles.loadingData}>Loading...</Text>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.firstBlock}>
              <Text style={styles.inputName}>Full Name</Text>
              <TextInput
                style={styles.input}
                defaultValue={`${userData[0].attributes?.firstname} ${userData[0].attributes?.lastname}`}
                onChangeText={value => onChangeFullName(value)}
              />
            </View>
            {getUserLogoItem(
              `${userData[0].attributes?.firstname} ${userData[0].attributes?.lastname}`,
            )}
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
            buttonStyle={Platform.select({
              ios: styles.ios,
              android: styles.android,
            })}
            containerStyle={styles.containerStyle}
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
