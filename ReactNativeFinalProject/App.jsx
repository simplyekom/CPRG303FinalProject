/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ViewHouseholdScreen from './src/screens/ViewHouseholdScreen';
import CreateHouseholdScreen from './src/screens/CreateHouseholdScreen';
import SearchHouseholdScreen from './src/screens/SearchHouseholdScreen';


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="View Household" component={ViewHouseholdScreen} />
        <Stack.Screen name="Create Household" component={ViewHouseholdScreen} />
        <Stack.Screen name="Search Existing Household" component={SearchHouseholdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
