import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginView from '../views/LoginView';
//import GradeView from '../views/GradeView';
import GradeStatistics from '../views/GradeStatistics';

function GradeViewScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TabList = createBottomTabNavigator();

function MyTabList() {
  return (
    <TabList.Navigator>
      <TabList.Screen name="Home" component={GradeViewScreen} />
      <TabList.Screen name="Settings" component={SettingsScreen} />
    </TabList.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabList/>
    </NavigationContainer>
  );
}
