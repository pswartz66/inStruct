import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../navigation/bottomTabNavigator';
import DetailsScreen from '../screens/Details';

const Stack = createStackNavigator();

const RootNavigation = (props) => {

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

          <Stack.Screen 
            name="Details"
            component={DetailsScreen}
            options={{ 
              title: "Our Instructors", 
              headerShown: true,
              // headerLeft: () => (
              //   <Button
              //     onPress={() => alert('This is a button!')}
              //     title="Info"
              //     color="black"
              //   />
              // ),
              headerBackTitle: true,
              
            }}  
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;