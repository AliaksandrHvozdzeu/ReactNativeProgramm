import React from 'react';
import {SafeAreaView, Text, Linking, View, Alert} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import Share from 'react-native-share';
import {COLORS} from '../../utils/colors';

const CustomSidebarMenu = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      Share.shareSingle({
        backgroundImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rt4KhJGVSIihCxFHnP66WJNMjuZFLz_C-FFxBsEorKy0t8HF1i_OHfGuDnsQp9RcTk8&usqp=CAU',
        stickerImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        backgroundBottomColor: COLORS.neutral_0,
        backgroundTopColor: COLORS.blue_300,
        attributionURL: 'http://my.app.com',
        social: Share.Social.INSTAGRAM_STORIES,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.menuLabel}>Ecommerce Store</Text>
      <DrawerContentScrollView>
        <Text style={styles.menuGroupText}>My Account</Text>
        <DrawerItem
          label="My Profile"
          icon={() => (
            <Icon
              style={styles.menuIcon}
              type="font-awesome"
              name="user"
              size={styles.menuIcon.size}
              color={styles.menuIcon.color}
            />
          )}
          labelStyle={styles.menuItem}
          style={styles.drawItem}
          onPress={async () => {
            const token = await SecureStore.getItemAsync('secure_token');
            if (token) {
              navigation.navigate('MyProfile');
            } else {
              navigation.navigate('LogIn');
            }
          }}
        />
        <DrawerItem
          label="My Wish List"
          icon={() => (
            <Icon
              style={styles.menuIcon}
              type="antdesign"
              name="heart"
              size={styles.menuIcon.size}
              color={styles.menuIcon.color}
            />
          )}
          labelStyle={styles.menuItem}
          style={styles.drawItem}
          onPress={async () => {
            const token = await SecureStore.getItemAsync('secure_token');
            if (token) {
              navigation.navigate('WishList');
            } else {
              navigation.navigate('LogIn');
            }
          }}
        />
        <DrawerItem
          label="My Cart"
          icon={() => (
            <Icon
              style={styles.menuIcon}
              type="font-awesome"
              name="shopping-cart"
              size={styles.menuIcon.size}
              color={styles.menuIcon.color}
            />
          )}
          labelStyle={styles.menuItem}
          style={styles.drawItem}
          onPress={async () => {
            const token = await SecureStore.getItemAsync('secure_token');
            if (token) {
              navigation.navigate('MyCart');
            } else {
              navigation.navigate('MyCartLogin');
            }
          }}
        />
        <DrawerItem
          label="My Orders"
          icon={() => (
            <Icon
              style={styles.menuIcon}
              type="font-awesome"
              name="cart-arrow-down"
              size={styles.menuIcon.size}
              color={styles.menuIcon.color}
            />
          )}
          labelStyle={styles.menuItem}
          style={styles.drawItem}
          onPress={async () => {
            const token = await SecureStore.getItemAsync('secure_token');
            if (!token) {
              navigation.navigate('MyOrderLogin');
            } else {
              navigation.navigate('MyOrders');
            }
          }}
        />
        <View style={styles.menuLine} />
        <Text style={styles.menuGroupText}>Support</Text>
        <DrawerItem
          label="Email"
          icon={() => (
            <Icon
              style={styles.menuIcon}
              type="material-community-icons"
              name="mail"
              size={styles.menuIcon.size}
              color={styles.menuIcon.color}
            />
          )}
          labelStyle={styles.menuItem}
          style={styles.drawItem}
          onPress={() => Linking.openURL('')}
        />
        <DrawerItem
          label="Call"
          icon={() => (
            <Icon
              style={styles.menuIcon}
              type="ionicons"
              name="call"
              size={styles.menuIcon.size}
              color={styles.menuIcon.color}
            />
          )}
          labelStyle={styles.menuItem}
          style={styles.drawItem}
          onPress={() => Linking.openURL('')}
        />
        <View style={styles.menuLine} />
        <View style={styles.share}>
          <DrawerItem
            label="Share"
            icon={() => (
              <Icon
                style={styles.menuIcon}
                type="entypo"
                name="share"
                size={styles.menuIcon.size}
                color={styles.menuIcon.color}
              />
            )}
            labelStyle={styles.menuItem}
            style={styles.drawItem}
            onPress={() => onShare()}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
