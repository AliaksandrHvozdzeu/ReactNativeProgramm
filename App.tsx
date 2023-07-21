import React, {useEffect} from 'react';
import Main from './src/components/main';
import AddProductModal from './src/components/addProductModal';
import ProductDetails from './src/components/productDetails';
import CarouselItemView from './src/components/carouselItemView';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import ChooseColorModal from './src/components/chooseColorModal';
import LoginToContinueModal from './src/components/loginToContinueModal';
import SignUp from './src/components/signUp';
import ForgotPassword from './src/components/forgotPassword';
import LogIn from './src/components/logIn';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import CustomSidebarMenu from './src/components/customSidebarMenu';
import WishList from './src/components/wishList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyProfile from "./src/components/myProfile";
import LogoutModal from "./src/components/logoutModal";
import AddProductWishModal from "./src/components/addProductWishModal";
import MyCartLogin from "./src/components/myCartLogin";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const DrawerManu = () => {
    return (
      <Drawer.Navigator
        drawerContent={() => <CustomSidebarMenu />}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="MyProfile" component={MyProfile} />
        <Drawer.Screen name="MyCartLogin" component={MyCartLogin} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Group>
          <Stack.Screen name="DrawerManu" component={DrawerManu} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="CarouselItemView" component={CarouselItemView} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="WishList" component={WishList} />
          <Stack.Screen name="MyCartLogin" component={MyCartLogin} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="AddProductModal" component={AddProductModal} />
          <Stack.Screen name="ChooseColorModal" component={ChooseColorModal} />
          <Stack.Screen name="LogoutModal" component={LogoutModal} />
          <Stack.Screen name="AddProductWishModal" component={AddProductWishModal} />
          <Stack.Screen
            name="LoginToContinueModal"
            component={LoginToContinueModal}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
