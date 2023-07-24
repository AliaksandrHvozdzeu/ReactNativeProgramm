import React from 'react';
import {SafeAreaView, Text, Linking, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import MyCartFill from "../myCartFill";

const CustomSidebarMenu = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
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
          onPress={() => navigation.navigate('MyProfile')}
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
          onPress={() => navigation.navigate('WishList')}
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
          // onPress={() => navigation.navigate('MyCartLogin')}
          // onPress={() => navigation.navigate('MyCartEmpty')}
          onPress={() => navigation.navigate('MyCartFill')}
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
          onPress={() => Linking.openURL('https://aboutreact.com/')}
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
          onPress={() => Linking.openURL('https://aboutreact.com/')}
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
          onPress={() => Linking.openURL('https://aboutreact.com/')}
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
            onPress={() => Linking.openURL('https://aboutreact.com/')}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
