import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './views/LoginScreen';
import GradeScreen from './views/GradeScreen';

export const Stack = createStackNavigator();

export const userToken = null;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={userToken == null ? ("Login") : ("Grades")}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Grades" component={GradeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}