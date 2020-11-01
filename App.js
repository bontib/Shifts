import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/home.screen';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const stack = createStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <stack.Navigator>
          <stack.Screen name="Home" component={HomeScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}

