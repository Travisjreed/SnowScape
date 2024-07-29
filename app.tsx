// App.tsx

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './app/index';
import GetStartedScreen from './app/GetStartedScreen';
import SignInScreen from './app/SignInScreen';

export type RootStackParamList = {
  Landing: undefined;
  GetStarted: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="GetStarted" 
          component={GetStartedScreen} 
          options={{ title: 'Get Started' }} 
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ title: 'Sign In' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
