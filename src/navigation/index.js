import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../navigation/bottomTabNavigator';
import DetailsScreen from '../screens/Details';
import ProfileSettingsScreen from '../screens/ProfileSettings';
import EditProfileScreen from '../screens/EditProfile';
import BookAppointmentScreen from '../screens/BookAppointment';


const Stack = createStackNavigator();

const RootNavigation = (props) => {

  console.log('AWS AppSync Client: ', props.client);

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
            headerBackTitle: true,
            headerTitleStyle: {
              color: 'black',
              fontFamily: 'HelveticaNeue-Medium',
              fontSize: 20,
            }
          }}
        />

        <Stack.Screen
          name="ProfileSettings"
          component={ProfileSettingsScreen}
          options={{
            title: "Settings",
            headerShown: true,
            headerBackTitle: true,
            headerTitleStyle: {
              color: 'black',
              fontFamily: 'HelveticaNeue-Medium',
              fontSize: 20,
            }
          }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            title: "Edit Profile",
            headerShown: true,
            headerBackTitle: true,
            headerTitleStyle: {
              color: 'black',
              fontFamily: 'HelveticaNeue-Medium',
              fontSize: 20,
            }
          }}
        />


        <Stack.Screen
          name="BookAppointment"
          component={BookAppointmentScreen}
          options={{
            title: "Appointment",
            headerShown: true,
            headerBackTitle: true,
            headerTitleStyle: {
              color: 'black',
              fontFamily: 'HelveticaNeue-Medium',
              fontSize: 20,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;