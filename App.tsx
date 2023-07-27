import React, {useEffect, createContext, useState} from 'react';
import Main from './src/components/main';
import AddProductModal from './src/components/addProductModal';
import ProductDetails from './src/components/productDetails';
import CarouselItemView from './src/components/carouselItemView';
import {NavigationContainer} from '@react-navigation/native';
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
import MyProfile from './src/components/myProfile';
import LogoutModal from './src/components/logoutModal';
import AddProductWishModal from './src/components/addProductWishModal';
import MyCartLogin from './src/components/myCartLogin';
import MyCartEmpty from './src/components/myCartEmpty';
import OrderConfirmation from './src/components/orderConfirmation';
import MyCartFill from './src/components/myCartFill';
import MyOrderLogin from './src/components/myOrderLogin';
import MyOrders from './src/components/myOrders';
import MyOrderDetails from './src/components/myOrderDetails';
import MyOrderMap from './src/components/myOrderMap';
import {LogBox, StatusBar} from 'react-native';
import * as SecureStore from 'expo-secure-store';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const [userName, setUserName] = useState('');
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: {type: string; token: any}) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignOut: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null,
    },
  );

  useEffect(() => {
    StatusBar.setHidden(true);
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync('secure_token');
        // const response = await fetch(
        //   'https://demo.spreecommerce.org/spree_oauth/token',
        //   {
        //     method: 'POST',
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       grant_type: 'refresh_token',
        //       refresh_token: userToken,
        //     }),
        //   },
        // );
        // const content = await response.json();
        // if (content.error) {
        //   console.log(content.error);
        // } else {
        //   userToken = content.access_token;
        // }
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, []);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: {username: string; password: string}) => {
        setUserName(data.username);
        const response = await fetch(
          'https://demo.spreecommerce.org/spree_oauth/token',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              grant_type: 'password',
              username: data.username,
              password: data.password,
            }),
          },
        );
        const content = await response.json();
        await SecureStore.setItemAsync('secure_token', content.access_token);
        dispatch({type: 'SIGN_IN', token: content.access_token});
      },
      signOut: async () => {
        await SecureStore.setItemAsync('secure_token', '');
        dispatch({
          type: 'SIGN_OUT',
          token: undefined,
        });
      },
      signUp: async (data: {username: string; password: string}) => {
        const response = await fetch(
          'https://demo.spreecommerce.org/spree_oauth/token',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user: {
                email: 'password',
                first_name: data.username,
                last_name: data.password,
                password: data.password,
                password_confirmation: data.password,
              },
            }),
          },
        );
        const content = await response.json();
        dispatch({type: 'SIGN_IN', token: content.access_token});
      },
    }),
    [],
  );

  const AuthContext = createContext(authContext);

  const Root = () => {
    return (
      <Drawer.Navigator
        drawerContent={() => <CustomSidebarMenu />}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          initialParams={{authContext: authContext}}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />
          {state.userToken == null ? (
            <Stack.Group>
              <Stack.Screen
                name="Main"
                component={Main}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="LogIn"
                component={LogIn}
                initialParams={{authContext: authContext}}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MyCartLogin"
                component={MyCartLogin}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MyOrderLogin"
                component={MyOrderLogin}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="CarouselItemView"
                component={CarouselItemView}
                options={{headerShown: false}}
              />
            </Stack.Group>
          ) : (
            <>
              <Stack.Group>
                <Stack.Screen
                  name="Main"
                  component={Main}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="LogIn"
                  component={LogIn}
                  initialParams={{authContext: authContext}}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="MyCartLogin"
                  component={MyCartLogin}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="MyProfile"
                  component={MyProfile}
                  initialParams={{
                    authContext: authContext,
                    userName: userName,
                    token: state.userToken,
                  }}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="ProductDetails"
                  component={ProductDetails}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="CarouselItemView"
                  component={CarouselItemView}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="WishList"
                  component={WishList}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="MyCartEmpty"
                  component={MyCartEmpty}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="MyCartFill"
                  component={MyCartFill}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="MyOrders"
                  component={MyOrders}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="MyOrderDetails"
                  component={MyOrderDetails}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="MyOrderMap"
                  component={MyOrderMap}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="MyOrderLogin"
                  component={MyOrderLogin}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="OrderConfirmation"
                  component={OrderConfirmation}
                  options={{headerShown: false}}
                />
              </Stack.Group>
              <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen
                  name="AddProductModal"
                  component={AddProductModal}
                />
                <Stack.Screen
                  name="ChooseColorModal"
                  component={ChooseColorModal}
                />
                <Stack.Screen name="LogoutModal" component={LogoutModal} />
                <Stack.Screen
                  name="AddProductWishModal"
                  component={AddProductWishModal}
                />
                <Stack.Screen
                  name="LoginToContinueModal"
                  component={LoginToContinueModal}
                />
              </Stack.Group>
            </>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
