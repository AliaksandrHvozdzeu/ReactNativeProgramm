import React, {useEffect} from 'react';
import Main from './src/components/main';
import AddProductModal from './src/components/addProductModal';
import ProductDetails from './src/components/productDetails';
import CarouselItemView from './src/components/carouselItemView';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import ChooseColorModal from './src/components/chooseColorModal';
import LoginToContinueModal from './src/components/loginToContinueModal';
import SignUp from './src/components/signUp';
import ForgotPassword from './src/components/forgotPassword';
import LogIn from './src/components/logIn';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import CustomSidebarMenu from './src/components/customSidebarMenu';
import WishList from "./src/components/wishList";

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={() => <CustomSidebarMenu />}
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Group>
          <Drawer.Screen
            name="Main"
            component={Main}
            options={{title: 'Main'}}
          />
          <Drawer.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{title: 'ProductDetails'}}
          />
          <Drawer.Screen
            name="CarouselItemView"
            component={CarouselItemView}
            options={{title: 'CarouselItemView'}}
          />
          <Drawer.Screen
            name="SignUp"
            component={SignUp}
            options={{title: 'SignUp'}}
          />
          <Drawer.Screen
            name="LogIn"
            component={LogIn}
            options={{title: 'LogIn'}}
          />
          <Drawer.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{title: 'ForgotPassword'}}
          />
          <Drawer.Screen
            name="WishList"
            component={WishList}
            options={{title: 'WishList'}}
          />
        </Drawer.Group>
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen
            name="AddProductModal"
            component={AddProductModal}
          />
          <RootStack.Screen
            name="ChooseColorModal"
            component={ChooseColorModal}
          />
          <RootStack.Screen
            name="LoginToContinueModal"
            component={LoginToContinueModal}
          />
        </RootStack.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
