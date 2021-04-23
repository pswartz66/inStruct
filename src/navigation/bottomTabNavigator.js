import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Skills from '../screens/Skills';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
        },
        // safeAreaInsets: { 
        //   bottom: 10, 
        // },
        style: {
          height: 90,
          // paddingBottom: 40,
        },
        activeTintColor: 'white',
        inactiveTintColor: '#91bbff',

      }}
    >

      <Tab.Screen
        name="Skills"
        component={Skills}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name={'list'} size={25} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Find"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name={'find'} size={25} color={color} />
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