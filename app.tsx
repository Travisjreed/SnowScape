import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './app/index';
import SignInScreen from './app/auth/SignIn';
import SignUpScreen from './app/auth/SignUp';
import UserTypeScreen from './app/auth/UserType';
import SignUpExpertScreen from './app/auth/SignUpExpert'; // Import SignUpExpert screen

export type RootStackParamList = {
  Landing: undefined;
  SignIn: undefined;
  SignUp: undefined;
  UserType: undefined;
  SignUpExpert: undefined; // Add SignUpExpert to the stack param list
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
          name="SignIn" 
          component={SignInScreen} 
          options={{ title: 'Sign In' }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up' }} 
        />
        <Stack.Screen 
          name="UserType" 
          component={UserTypeScreen} 
          options={{ title: 'Choose Your Role' }} 
        />
        <Stack.Screen 
          name="SignUpExpert" 
          component={SignUpExpertScreen} 
          options={{ title: 'Expert Sign Up' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
