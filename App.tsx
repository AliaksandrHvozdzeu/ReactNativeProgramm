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

const RootStack = createStackNavigator();

const App = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Group>
          <RootStack.Screen
            name="Main"
            component={Main}
            options={{title: 'Main'}}
          />
          <RootStack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{title: 'ProductDetails'}}
          />
          <RootStack.Screen
            name="CarouselItemView"
            component={CarouselItemView}
            options={{title: 'CarouselItemView'}}
          />
          <RootStack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: 'SignUp'}}
          />
          <RootStack.Screen
            name="LogIn"
            component={LogIn}
            options={{title: 'LogIn'}}
          />
          <RootStack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{title: 'ForgotPassword'}}
          />
        </RootStack.Group>
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
      </RootStack.Navigator>
    </NavigationContainer>
  );
  //return <ProductDetails productSlug={'tank-top'} />;
  //return <CarouselItemView />;
};

export default App;
