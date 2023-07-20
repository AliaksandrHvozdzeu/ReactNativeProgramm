import React from 'react';
import Main from './src/components/main';
import ProductDetails from './src/components/productDetails';
import CarouselItemView from './src/components/carouselItemView';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{title: 'Main'}} />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{title: 'ProductDetails'}}
        />

        <Stack.Screen
          name="CarouselItemView"
          component={CarouselItemView}
          options={{title: 'CarouselItemView'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  //return <ProductDetails productSlug={'tank-top'} />;
  //return <CarouselItemView />;
};

export default App;
