import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../navigation/bottomTabNavigator';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen 
            name="Bottom-Nav" 
            component={BottomTabNavigator} 
            options={({ route }) => ({ 
              title: "Home Page", 
              headerShown: false,
              
            })}  
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;