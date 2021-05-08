import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Connect from '../screens/Connect';
import Meet from '../screens/Meet';
import Learn from '../screens/Learn';
import Profile from '../screens/Profile';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="Find"
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#2679ff',
          height: 90,
          paddingBottom: 30,
          marginTop: -1,
        },
        style: {
          height: 90,
        },
        activeTintColor: 'white',
        inactiveTintColor: '#91bbff',

      }}
    >
      <Tab.Screen
        name="Find"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'search'} size={25} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Connect"
        component={Connect}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'message-circle'} size={25} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Meet"
        component={Meet}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'calendar'} size={25} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'trending-up'} size={25} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={'person'} size={25} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;